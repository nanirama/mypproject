import React, { useEffect, useState, useContext } from "react";
import { Table, Td, Thead, Tbody, TableWrapper, TrHead, Th, Tr, Inner } from "../../table";
import { getEvents, getEventsCredits } from "./query";
import { AuthContext } from "../../../context/auth";
import { keyBy } from "lodash";
import { navigate } from "gatsby";

const EventList = ({ orgaId }) => {
  const { accessToken } = useContext(AuthContext);
  const [events, setEvents] = useState();
  const [eventsCreditsConsumption, setCreditsConsumption] = useState();
  useEffect(() => {
    const getEventsList = async () => {
      const eventsRaw = await getEvents(accessToken);
      const credits = await getEventsCredits(accessToken, orgaId);

      if (credits && credits.errors) {
        navigate("/billing/organization?error=" + credits.errors[0].message);
      }

      if (eventsRaw && credits && credits.data) {
        const creditsByEventId = keyBy(credits.data.Billing_organizationEventCredits.nodes, "eventId");
        setEvents(
          eventsRaw.viewer.events
            .filter((e) => e.organization.id === orgaId)
            .map((e) => {
              const id = atob(e.id).split("_")[1];

              let people, exhibitor;
              if (creditsByEventId[id]) {
                people = Math.abs(creditsByEventId[id].people);
                exhibitor = Math.abs(creditsByEventId[id].exhibitor);
              }

              return {
                id,
                title: e.title,
                beginsAt: e.beginsAt,
                people,
                exhibitor,
              };
            })
            .reverse()
        );
      }
    };
    getEventsList();
  }, [orgaId, accessToken]);

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <TrHead>
            <Th>Event Name</Th>
            <Th>Begins At</Th>
            <Th>People</Th>
            <Th>Exhibitors</Th>
          </TrHead>
        </Thead>
        <Tbody>
          {events &&
            events.map((e) => (
              <Tr>
                <Td>
                  <Inner>{e.title}</Inner>
                  {/* <Inner>{eventsCreditsConsumption[atob(e.id).split("_")[1]]["peopleCreditConsumption"]}</Inner> */}
                </Td>
                <Td>
                  <Inner>{new Date(e.beginsAt).toLocaleDateString("en-us")}</Inner>
                </Td>
                <Td>
                  <Inner>{e.people}</Inner>
                </Td>
                <Td>
                  <Inner>{e.exhibitor}</Inner>
                </Td>
              </Tr>
            ))}
          {!events &&
            Array.from({ length: 10 }).map((_, index) => (
              <Tr>
                <Td>
                  <Inner>--</Inner>
                </Td>
                <Td>
                  <Inner>--</Inner>
                </Td>
                <Td>
                  <Inner>--</Inner>
                </Td>
                <Td>
                  <Inner>--</Inner>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
};

export default EventList;
