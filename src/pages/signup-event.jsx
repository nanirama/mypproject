import React, { useState, useEffect } from "react";
import axios from "axios";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo1, Typo2, Typo3, Typo5, BodySmall } from "../components/typographie";
import { SpaceH } from "../components/space/index";
import Label from "../components/form/label";
import { Input as _Input } from "../components/form/input";
import _Password from "../components/form/password";
import CustomersLogo from "../components/section/customers_logo";
import { LogoDefault } from "../components/logo";
import Route from "../localization";
import styled from "styled-components";
import Link from "../components/utils/link";
import { Margin, Padding } from "styled-components-spacing";
import _Submit from "../components/form/submit";
import isEqual from "lodash/isEqual";
import isEmail from "validator/lib/isEmail";
import { analyticsTrack, analyticsIdentify } from "../components/utils/segment";

const Wrapper = styled.div`
  margin: 20px 0;
`;
const InputRow = styled.div`
  display: flex;
`;

const InputRowAlign = styled.div`
  display: flex;
  align-items: center;
`;
const InputCol = styled.div`
  flex: 1;
`;
const Input = styled(_Input)`
  font-family: inherit;
  border-color: ${(props) => props.isInvalid && props.theme.color.error};
`;
const Password = styled(_Password)`
  font-family: inherit;
  border-color: ${(props) => props.isInvalid && props.theme.color.error};
`;
const Submit = styled(_Submit)`
  font-family: inherit;
  :disabled {
    cursor: default !important;
  }
`;
const ErrorMessage = styled.div`
  color: ${(props) => props.theme.color.error};
  margin-top: 5px;
  font-size: 0.8rem;
  text-align: left;
`;

const HTMLCheckbox = (props) => <input type="checkbox" {...props} />;

const Checkbox = styled(HTMLCheckbox)`
  position: relative;
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  -ms-progress-appearance: checkbox;
  height: 20px;
  width: 24px;
  filter: hue-rotate(-55deg) brightness(1.3);
`;

const pageContext = {
  lang: "en-us",
  meta_title: "Sign up | Swapcard",
  meta_description: "Create your free event today on the Leading All-in-One Virtual & Hybrid Events Platform",
  route: "signup_event",
  showNavigation: "contentOnly",
};

const Page = (props) => {
  const colParams = {
    default: {
      form: {
        xs: 12,
        sm: 10,
        md: 8,
        lg: 5,
      },
      text: {
        xs: 12,
        md: 6,
        offset: 0,
      },
    },
  };
  const colLayout = "default";

  const [form, setForm] = useState({
    emailAddress: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    isConditionsChecked: false,
    isLoading: false,
  });

  const initialErrors = {
    emailAddress: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
  };
  const [errors, setErrors] = useState(initialErrors);
  const fieldRequiredErrorMessage = "This field is required";
  const invalidEmailErrorMessage = "This email is invalid";
  const weakPasswordErrorMessage = "This password is too weak (8 characters min.)";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((state) => ({ ...state, [name]: value === "" ? fieldRequiredErrorMessage : "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setForm((state) => ({ ...state, isLoading: true }));
      const { emailAddress, firstName, lastName, phoneNumber, password } = form;
      const data = {
        emailAddress,
        firstName,
        lastName,
        phoneNumber,
        password,
        shouldReturnRefreshToken: true,
      };
      const updatedErrors = { ...initialErrors };
      if (form.password.length < 8) updatedErrors.password = weakPasswordErrorMessage;
      if (!isEmail(form.emailAddress)) updatedErrors.emailAddress = invalidEmailErrorMessage;
      for (const [key, value] of Object.entries(form)) {
        if (value === "") updatedErrors[key] = fieldRequiredErrorMessage;
      }
      setErrors(updatedErrors);
      if (isEqual(updatedErrors, initialErrors)) {
        analyticsIdentify(data.emailAddress.toLowerCase(), {
          email: data.emailAddress,
          firstName: data.firstName,
          lastName: data.lastName,
        });
        analyticsTrack("Ads:Account Created");
        await axios.post("https://auth-api.swapcard.com/api/signup", data);
        window.location.assign("https://studio.swapcard.com");
      }
    } catch (error) {
      if (error.response) {
        const errorType = error.response.data.error;
        const errorMessage = error.response.data.message;
        if (errorType)
          if (errorType.includes("PHONE")) setErrors((state) => ({ ...state, phoneNumber: errorMessage }));
          else if (errorType.includes("EMAIL"))
            setErrors((state) => ({ ...state, emailAddress: errorMessage || invalidEmailErrorMessage }));
          else if (errorType.includes("PASSWORD"))
            setErrors((state) => ({ ...state, password: errorMessage || weakPasswordErrorMessage }));
      }
    } finally {
      setForm((state) => ({ ...state, isLoading: false }));
    }
  };

  return (
    <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
      <Wrapper>
        <Grid>
          <Row center="xs">
            <Col md={12}>
              <Link to={Route[pageContext.lang]["homepage"]}>
                <LogoDefault />
              </Link>
            </Col>
          </Row>

          <SpaceH of={10} />

          <Row center="xs">
            <Col md={6} xs={12}>
              <Typo2>The Leading All-in-One Virtual & Hybrid Events Platform</Typo2>
              <SpaceH of={20} />
              <Typo3 color="#00CC88" bold>
                Create your free event today
              </Typo3>
            </Col>
          </Row>

          <SpaceH of={30} />

          <Row center="xs">
            <Col {...colParams[colLayout].form}>
              <form onSubmit={handleSubmit}>
                <InputRow>
                  <InputCol>
                    <Margin right="1">
                      <Label required>First name</Label>
                      <Input
                        required
                        value={form.firstName}
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.firstName !== ""}
                      />
                      <ErrorMessage>{errors.firstName}</ErrorMessage>
                    </Margin>
                  </InputCol>
                  <InputCol>
                    <Label required>Last name</Label>
                    <Input
                      required
                      value={form.lastName}
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.lastName !== ""}
                    />
                    <ErrorMessage>{errors.lastName}</ErrorMessage>
                  </InputCol>
                </InputRow>
                <SpaceH of={5} />
                <Label required>Email</Label>
                <Input
                  required
                  value={form.emailAddress}
                  name="emailAddress"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.emailAddress !== ""}
                />
                <ErrorMessage>{errors.emailAddress}</ErrorMessage>
                <SpaceH of={5} />
                <Label required>Phone</Label>
                <Input
                  required
                  value={form.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.phoneNumber !== ""}
                />
                <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
                <SpaceH of={5} />
                <Label required>Password</Label>
                <Password
                  required
                  value={form.password}
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.password !== ""}
                />
                <ErrorMessage>{errors.password}</ErrorMessage>
                <SpaceH of={10} />
                <InputRowAlign>
                  <Checkbox
                    required
                    checked={form.isConditionsChecked}
                    name="isConditionsChecked"
                    onChange={handleChange}
                  />
                  <span style={{ fontSize: "15px", marginLeft: "5px" }}>
                    I agree to Swapcard's{" "}
                    <a
                      href={Route[pageContext.lang]["legal/terms_of_use"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#00CC88" }}
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href={Route[pageContext.lang]["legal/privacy_policy"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#00CC88" }}
                    >
                      Privacy Policy
                    </a>
                  </span>
                </InputRowAlign>
                <SpaceH of={20} />
                <Submit
                  isLoading={form.isLoading}
                  disabled={!form.isConditionsChecked}
                  value="Create my free account"
                />
                <SpaceH of={10} />
                <BodySmall>No credit card required</BodySmall>
              </form>
            </Col>
          </Row>
          <SpaceH of={30} />
          <Row>
            <Col xs={12}>
              <Typo5 center bold>
                Leading brands trust us
              </Typo5>
            </Col>
          </Row>

          {props.data.prismicTemplate1.data.bodyMain
            .filter((slice) => slice.slice_type === "customers_logo")
            .map((data, i) => (
              <CustomersLogo key={i} data={data} />
            ))}
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query Signup {
    translation: prismicTranslate {
      ...genericData
    }
    prismicTemplate1(id: { eq: "d2f65f69-ef90-5b85-afd0-ed0421659bb4" }) {
      ...customersLogoFragment
    }
  }
`;
