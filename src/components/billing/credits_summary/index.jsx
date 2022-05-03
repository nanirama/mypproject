import React, { useEffect, useState, useContext } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import { Body } from "../../typographie";
import { SpaceH } from "../../space";
import withLocation from "../../../HOC/location";
import { getSubscription } from "../query/subscription";
import { getOrganizationBillingQuery } from "./query/billing";
import { AuthContext } from "../../../context/auth";
import prices from "../upgrade_plan/prices.json";
import { showPriceStrRaw } from "../utils";
import { Table, Td, Thead, Tbody, TableWrapper, TrHead, Th, Tr, Inner } from "../../table";
import moment from "moment";
import { Typo3, Typo5 } from "../../typographie";

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid rgb(224, 224, 224);
  width: 100%;
  border-radius: 3px;

  padding: 20px 0;
`;

const CreditsRow = styled.div`
  display: grid;
  grid-template-columns: 50% 1px 50%;
  /* grid-gap: 20px 10px; */
`;
const CreditsSum = styled.div`
  /* border-right: ${(props) => (props.last ? "" : "1px solid rgb(224, 224, 224)")}; */
  padding: 0 20px;
`;

const CreditsTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

const ProgressBar = styled.div`
  background: #f1f2f5;
  width: 100%;
  height: 12px;
  border-radius: 4px;
`;

const Progress = styled.div`
  background: ${(props) => props.theme.color.secondary};
  width: ${(props) => props.width}%;
  height: inherit;
  max-width: 100%;
  border-radius: inherit;
`;

const BillingInfo = styled.div`
  border-top: 1px solid rgb(224, 224, 224);
  margin: 20px 20px 0 20px;
  padding: 20px 0 0 0;
`;

const Divider = styled.div`
  background: rgb(224, 224, 224);
  height: 100%;
`;

const CreditsSummary = ({ ...props }) => {
  const [organizationId] = useState(props.search.id);
  const [billing, setBilling] = useState();

  const [peoplePurchased, setPeoplePurchased] = useState(0);
  const [exhibitorsPurchased, setExhibitorsPurchased] = useState("0");

  const [subscription, setSubscription] = useState();
  const { accessToken } = useContext(AuthContext);
  useEffect(() => {
    const fetchBillingInfo = async () => {
      if (accessToken) {
        const sub = await getSubscription(accessToken, organizationId);
        if (!sub) {
          // navigate("/billing/organization?error=No subscription is created");
        }

        console.log(sub);

        setSubscription(sub);

        if (sub && sub.product.productName === "FREE_PLAN") {
          setPeoplePurchased(500);
          setExhibitorsPurchased(10);
        }

        const organizationBilling = await getOrganizationBillingQuery(accessToken, organizationId);

        if (organizationBilling && organizationBilling.Billing_organization) {
          setBilling(organizationBilling.Billing_organization);
          console.log(organizationBilling.Billing_organization);
          if (sub && sub.product.productName !== "FREE_PLAN") {
            setPeoplePurchased(organizationBilling.Billing_organization.peopleAvailableCredits);
            setExhibitorsPurchased(organizationBilling.Billing_organization.exhibitorsAvailableCredits);
          }
        }
      }
    };
    fetchBillingInfo();
  }, [accessToken]);

  return (
    <>
      <Wrapper>
        <CreditsRow>
          <CreditsSum>
            <CreditsTitle>People</CreditsTitle>
            <SpaceH of={10} />
            {subscription && subscription.product.productName === "CUSTOM_PLAN" ? (
              <p>
                You have used {billing ? Math.abs(billing.peopleConsumedCredits) : "..."} people since your account
                creation date.
              </p>
            ) : (
              <>
                <p>
                  This period you have used {billing ? Math.abs(billing.peopleConsumedCredits) : "..."} of your{" "}
                  {peoplePurchased ? peoplePurchased : "..."} available people.
                </p>
              </>
            )}
            <SpaceH of={15} />
            <ProgressBar>
              <Progress
                width={
                  billing ? Math.abs(((billing && billing.peopleConsumedCredits) / Math.abs(peoplePurchased)) * 100) : 0
                }
              />
            </ProgressBar>
            <SpaceH of={15} />
            <p>On freemium plan the overage is not allowed. If you need more credits, please contact our sales team.</p>
          </CreditsSum>
          <Divider />
          <CreditsSum last={true}>
            <CreditsTitle>Exhibitors</CreditsTitle>
            <SpaceH of={10} />
            {subscription && subscription.product.productName === "CUSTOM_PLAN" ? (
              <p>
                You have used {billing ? Math.abs(billing.exhibitorsConsumedCredits) : "..."} exhibitors since your
                account creation date.
              </p>
            ) : (
              <p>
                This period you have used {billing ? Math.abs(billing.exhibitorsConsumedCredits) : "..."} of your{" "}
                {exhibitorsPurchased ? exhibitorsPurchased : "..."} available exhibitors.
              </p>
            )}
            <SpaceH of={15} />
            <ProgressBar>
              <Progress
                width={
                  billing
                    ? Math.abs((billing && billing.exhibitorsConsumedCredits) / Math.abs(exhibitorsPurchased)) * 100
                    : 0
                }
              />
            </ProgressBar>
          </CreditsSum>
        </CreditsRow>
      </Wrapper>
      <SpaceH of={20} />

      {subscription &&
        subscription.product.productName === "MEETUP_MONTHLY" &&
        billing &&
        Math.abs(billing.peopleConsumedCredits) > Math.abs(peoplePurchased) && (
          <>
            <Typo5>People Overage</Typo5>
            <SpaceH of={10} />
            <TableWrapper>
              <Table>
                <Tbody>
                  <Tr>
                    <Td>
                      <Inner>Current People Overage</Inner>
                    </Td>
                    <Td>
                      <Inner>
                        {billing && Math.abs(Math.abs(peoplePurchased) - Math.abs(billing.peopleConsumedCredits))}
                      </Inner>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Inner>Overage People Price</Inner>
                    </Td>
                    <Td>
                      <Inner>
                        {billing &&
                          showPriceStrRaw(
                            billing.billing.currency,
                            prices["meetup"]["monthly"]["overage"][billing.billing.currency]["people"]
                          )}{" "}
                        per people
                      </Inner>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Inner>Amount to be paid this billing cycle</Inner>
                    </Td>
                    <Td>
                      <Inner>
                        {billing &&
                          showPriceStrRaw(
                            billing.billing.currency,
                            Math.abs(Math.abs(peoplePurchased) - Math.abs(billing.peopleConsumedCredits)) *
                              prices["meetup"]["monthly"]["overage"][billing.billing.currency]["people"]
                          )}
                      </Inner>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableWrapper>
          </>
        )}

      {subscription &&
        subscription.product.productName === "MEETUP_MONTHLY" &&
        billing &&
        Math.abs(billing.exhibitorsConsumedCredits) > Math.abs(exhibitorsPurchased) && (
          <>
            <SpaceH of={30} />
            <Typo5>Exhibitors Overage</Typo5>
            <SpaceH of={10} />
            <TableWrapper>
              <Table>
                <Tbody>
                  <Tr>
                    <Td>
                      <Inner>Current People Overage</Inner>
                    </Td>
                    <Td>
                      <Inner>
                        {billing &&
                          Math.abs(Math.abs(exhibitorsPurchased) - Math.abs(billing.exhibitorsConsumedCredits))}
                      </Inner>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Inner>Overage People Price</Inner>
                    </Td>
                    <Td>
                      <Inner>
                        {billing &&
                          showPriceStrRaw(
                            billing.billing.currency,
                            prices["meetup"]["monthly"]["overage"][billing.billing.currency]["exhibitors"]
                          )}{" "}
                        per people
                      </Inner>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Inner>Amount to be paid this billing cycle</Inner>
                    </Td>
                    <Td>
                      <Inner>
                        {billing &&
                          showPriceStrRaw(
                            billing.billing.currency,
                            Math.abs(Math.abs(exhibitorsPurchased) - Math.abs(billing.exhibitorsConsumedCredits)) *
                              prices["meetup"]["monthly"]["overage"][billing.billing.currency]["exhibitors"]
                          )}
                      </Inner>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableWrapper>
          </>
        )}

      <SpaceH of={20} />
      {subscription && subscription.status === "paid" && subscription.product.productName === "MEETUP_MONTHLY" && (
        <TableWrapper>
          <Table>
            <Tbody>
              <Tr>
                <Td>
                  <Inner>Total</Inner>
                </Td>
                <Td>
                  <Inner>
                    {billing &&
                      showPriceStrRaw(
                        billing.billing.currency,
                        prices["meetup"]["monthly"]["price"][billing.billing.currency]
                      )}
                    /month
                  </Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Subscription Status</Inner>
                </Td>
                <Td>
                  <Inner>{subscription.status === "paid" && "Paid"}</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Overage Allowed</Inner>
                </Td>
                <Td>
                  <Inner>Yes</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Overage Price</Inner>
                </Td>
                <Td>
                  <Inner>
                    {billing &&
                      showPriceStrRaw(
                        billing.billing.currency,
                        prices["meetup"]["monthly"]["overage"][billing.billing.currency]["people"]
                      )}
                    /people -
                    {billing &&
                      showPriceStrRaw(
                        billing.billing.currency,
                        prices["meetup"]["monthly"]["overage"][billing.billing.currency]["exhibitors"]
                      )}
                    /exhibitors
                  </Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Billing Period Start</Inner>
                </Td>
                <Td>
                  <Inner>{moment(subscription.currentStartBillingDate).format("MMMM Do YYYY")}</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Billing Period End</Inner>
                </Td>
                <Td>
                  <Inner>{moment(subscription.nextBillingDate).format("MMMM Do YYYY")}</Inner>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableWrapper>
      )}

      {subscription && subscription.product.productName == "CUSTOM_PLAN" && (
        <>
          <Body>
            Contact your account manager or our{" "}
            <span style={{ textDecoration: "underline" }} onClick={() => zE("webWidget", "open")}>
              support
            </span>{" "}
            to learn more about the custom plan. No limitation has been applied to your account if you purchased credits
            in the past. If you are looking to upgrade to the meetup plan, please contact our support.
          </Body>
          <SpaceH of={15} />
          <TableWrapper>
            <Table>
              <Tbody>
                <Tr>
                  <Td>
                    <Inner>Subscription</Inner>
                  </Td>
                  <Td>
                    <Inner>Custom Plan</Inner>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Inner>Overage Allowed</Inner>
                  </Td>
                  <Td>
                    <Inner>Yes</Inner>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableWrapper>
        </>
      )}

      {subscription && subscription.status === "canceled" && (
        <TableWrapper>
          <Table>
            <Tbody>
              <Tr>
                <Td>
                  <Inner>Total</Inner>
                </Td>
                <Td>
                  <Inner>
                    {billing &&
                      showPriceStrRaw(
                        billing.billing.currency,
                        prices["meetup"]["monthly"]["price"][billing.billing.currency]
                      )}
                    / month
                  </Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Subscription Status</Inner>
                </Td>
                <Td>
                  <Inner>Canceled</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Overage Allowed</Inner>
                </Td>
                <Td>
                  <Inner>No</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Canceled At</Inner>
                </Td>
                <Td>
                  <Inner>{moment(subscription.canceledAt).format("MMMM Do YYYY")}</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Billing Period Start</Inner>
                </Td>
                <Td>
                  <Inner>{moment(subscription.currentStartBillingDate).format("MMMM Do YYYY")}</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Billing Period End</Inner>
                </Td>
                <Td>
                  <Inner>{moment(subscription.nextBillingDate).format("MMMM Do YYYY")}</Inner>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableWrapper>
      )}
      {subscription && subscription.status === "paid" && subscription.product.productName === "FREE_PLAN" && (
        <TableWrapper>
          <Table>
            <Tbody>
              <Tr>
                <Td>
                  <Inner>Total</Inner>
                </Td>
                <Td>
                  <Inner>Freemium Plan</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Subscription Status</Inner>
                </Td>
                <Td>
                  <Inner>Active</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Overage Allowed</Inner>
                </Td>
                <Td>
                  <Inner>No</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Billing Period Start</Inner>
                </Td>
                <Td>
                  <Inner>{moment(subscription.currentStartBillingDate).format("MMMM Do YYYY")}</Inner>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Inner>Billing Period End</Inner>
                </Td>
                <Td>
                  <Inner>{moment(subscription.currentStartBillingDate).add(1, "year").format("MMMM Do YYYY")}</Inner>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableWrapper>
      )}
    </>
  );
};

export default withLocation(CreditsSummary);
