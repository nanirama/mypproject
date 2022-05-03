import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Input } from "../../form/input";
import Submit from "../../form/submit";
import Label from "../../form/label";
import { Select } from "../../form/select";
import { useForm } from "react-hook-form";
import { SpaceH } from "../../space";
import { toast } from "react-toastify";
import getOrganizationBillingInfo, { updateOrganizationBillingInfo } from "./query/organization";
import { AuthContext } from "../../../context/auth";
import { getInvoices } from "../invoices/query/invoice";

const countriesListRaw = require("../../../localization/country.json");

const countriesSelect = countriesListRaw.map((e) => {
  return {
    label: e.name,
    value: e.code,
  };
});

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.color.error};
  margin-top: 5px;
  font-size: 0.8rem;
`;

const BillingInfo = ({ setStep, orgaId, setCurrencyParent }) => {
  const [enterpriseId, setEnterpriseId] = useState();
  const { accessToken } = useContext(AuthContext);
  const [loading, isLoading] = useState(false);
  const [invoice, setInvoice] = useState(false);

  const [currency, setCurrency] = useState();

  const { register, handleSubmit, errors, watch, setValue, getValues } = useForm();

  useEffect(() => {
    const getData = async () => {
      try {
        const invoice = await getInvoices(accessToken, orgaId);

        setInvoice(invoice);
        const data = await getOrganizationBillingInfo(accessToken, orgaId);
        if (data && data.Billing_organization) {
          const billing = data.Billing_organization.billing;
          setValue("companyName", billing.companyName);
          setValue("state", billing.state);
          setValue("city", billing.city);
          setValue("zipCode", billing.zipCode);
          setValue("country", billing.country);
          setValue("street", billing.street);
          setValue("billingEmail", billing.billingEmail);
          setValue("vat", billing.vat);
          setValue("currency", billing.currency);
          setCurrency(billing.currency);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [accessToken]);

  const submit = async (data) => {
    isLoading(true);
    try {
      const update = await updateOrganizationBillingInfo(accessToken, {
        organizationId: orgaId,
        address: {
          city: data.city,
          country: data.country,
          state: data.state,
          zipCode: data.zipCode,
          street: data.street,
        },
        currency: data.currency,
        billingEmail: data.billingEmail,
        companyName: data.companyName,
        ...(data.vat && { vat: data.vat }),
      });
      if (update) {
        window.localStorage.setItem(
          "billing",
          JSON.stringify({
            city: data.city,
            country: data.country,
            state: data.state,
            zipCode: data.zipCode,
            street: data.street,
            billingEmail: data.billingEmail,
            companyName: data.companyName,
          })
        );
        if (!setStep) {
          if (update.data.data.Billing_updateOrganizationBilling.erros) {
            isLoading(false);
            // toast.error(update.data.data.updateEnterprise.errors[0].message);
          } else {
            isLoading(false);
            toast.success("Organization has been saved");
          }
        } else {
          if (update.data.data.Billing_updateOrganizationBilling.errors) {
            isLoading(false);
            // toast.error(update.data.data.updateEnterprise.errors[0].message);
          } else {
            isLoading(false);
            setStep(2);
          }
        }
      } else {
        isLoading(false);
        toast.error("An error occured. Try later #1");
      }
    } catch (error) {
      console.log(error);
      isLoading(false);
      toast.error("An error occured. Try later #2");
    }
  };

  return (
    <Row>
      <Col xs={12}>
        <form onSubmit={handleSubmit(submit)}>
          <Row>
            <Col xs={6}>
              <Label>Company Name</Label>
              <Input register={register} name="companyName" required />
              <ErrorMessage>{errors.companyName && "Your company name is incorrect"}</ErrorMessage>
            </Col>
            <Col xs={6}>
              <Label>Billing Email</Label>
              <Input register={register} name="billingEmail" required />
              <ErrorMessage>{errors.billingEmail && "Your billing email is incorrect"}</ErrorMessage>
            </Col>
          </Row>
          <SpaceH of={10} />
          <Row>
            <Col xs={12}>
              <Label>Address</Label>
              <Input register={register} name="street" required />
              <ErrorMessage>{errors.street && "Your street is incorrect"}</ErrorMessage>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Label>Country</Label>
              <Select
                name="country"
                required
                register={register}
                options={[
                  {
                    label: "Please select",
                    value: "",
                  },
                  ...countriesSelect,
                ]}
              />
              <ErrorMessage>{errors.country && "Your country is incorrect"}</ErrorMessage>
            </Col>
            <Col xs={6}>
              <Label>State / Region</Label>
              <Input register={register} name="state" />
              <ErrorMessage>{errors.state && "Your state is incorrect"}</ErrorMessage>
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <Label>City</Label>
              <Input register={register} name="city" required />
              <ErrorMessage>{errors.city && "Your city is incorrect"}</ErrorMessage>
            </Col>
            <Col xs={4}>
              <Label>Zip Code</Label>
              <Input register={register} name="zipCode" required />
              <ErrorMessage>{errors.zipCode && "Your zip code is incorrect"}</ErrorMessage>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Label>VAT</Label>
              <Input register={register} name="vat" />
              <ErrorMessage>{errors.vat && "Your VAT is incorrect"}</ErrorMessage>
            </Col>

            {invoice &&
              invoice.Billing_organizationPayments.nodes &&
              invoice.Billing_organizationPayments.nodes.length > 0 && (
                <Col xs={6}>
                  <Label>Currency</Label>
                  <SpaceH of={10} />
                  {currency && currency}
                </Col>
              )}
            {invoice &&
              invoice.Billing_organizationPayments.nodes &&
              invoice.Billing_organizationPayments.nodes.length === 0 && (
                <Col xs={6}>
                  <Label>Currency</Label>
                  <Select
                    register={register}
                    onChange={(e) => setCurrencyParent && setCurrencyParent(e.target.value)}
                    name="currency"
                    options={[
                      {
                        value: "EUR",
                        label: "EUR",
                      },
                      {
                        value: "USD",
                        label: "USD",
                      },
                      {
                        value: "AED",
                        label: "AED",
                      },
                      {
                        value: "CAD",
                        label: "CAD",
                      },
                    ]}
                  />
                </Col>
              )}
          </Row>

          <SpaceH of={12} />
          <Row end="xs">
            <Col xs={12}>
              <Submit value="Save" isLoading={loading}>
                Save
              </Submit>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
};

export default BillingInfo;
