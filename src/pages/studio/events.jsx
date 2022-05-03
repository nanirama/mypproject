import React, { useEffect, useState, useMemo } from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import * as styled from "../../components/events/styled";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Typo2, Typo3 } from "../../components/typographie";
import withLocation from "../../HOC/location";
import LogoSrc from "../../assets/images/Logo/LogoFINAL.svg";
import Link from "../../components/utils/link";
import { SpaceH } from "../../components/space";
import SelectSearch from "react-select-search";
import { StyledSelectSearch } from "../../components/section/support/styled";
import { resolveRefreshToken } from "../../HOC/auth";
import axios from "axios";
import { useTable } from "react-table";

const pageContext = {
  lang: "en-us",
  meta_description: "Events",
  meta_title: "Events",
  route: "studio/events",
  showNavigation: "contentOnly",
};

export const Events = ({ ...props }) => {
  const [organization, setOrganization] = useState();
  const [events, setEvents] = useState();
  const [tableCols, setTableCols] = useState();
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState(false);

  useEffect(() => {
    if (organization) {
      const data = events.viewer.events
        .map(
          (e) =>
            e.organization.id === organization && {
              ColEventName: e.title,
              ColBeginsAt: e.beginsAt.split(" ")[0],
              ColPeople: e.listEventPeople.pageInfo.totalItems,
              ColExhibitors: e.totalExhibitors,
            }
        )
        .filter((e) => e);
      setTableData(data);
      if (data) {
        let numPeople = 0;
        let numExhibitors = 0;
        for (const e of data) {
          numPeople += e.ColPeople;
          numExhibitors += e.ColExhibitors;
        }

        setTableCols([
          {
            Header: "Event Name",
            accessor: "ColEventName",
            Footer: "TOTAL",
            minWidth: 400,
            className: "eventNameCss",
          },
          {
            Header: "Begins At",
            accessor: "ColBeginsAt",
            minWidth: 200,
          },
          {
            Header: "People",
            accessor: "ColPeople",
            Footer: numPeople.toString(),
            minWidth: 200,
          },
          {
            Header: "Exhibitors",
            accessor: "ColExhibitors",
            Footer: numExhibitors.toString(),
            minWidth: 200,
          },
        ]);
        setShowTable(true);
      }
    }
  }, [organization]);

  useEffect(() => {
    const getEvents = async () => {
      const accessToken = await resolveRefreshToken();
      if (accessToken) {
        const result = (
          await axios({
            url: process.env.API_EVENTS,
            method: "post",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            data: {
              query: `
                query EventsList {
                  organizations {
                    nodes {
                      id
                      name
                    }
                  }
                  viewer {
                    id
                    events: ownedEvents {
                      organization {
                        id
                      }
                      id
                      title
                      beginsAt
                      endsAt
                      totalExhibitors
                      listEventPeople {
                        pageInfo {
                          totalItems
                        }
                      }
                    }
                  }
                }
        `,
            },
          })
        ).data;
        if (result) {
          setEvents(result.data);
        }
      } else {
        window.location = "https://studio.swapcard.com/join?ref=showcase_events";
      }
    };

    getEvents();
  }, []);

  const organizations = events?.organizations?.nodes?.map((e) => {
    return {
      value: e.id,
      name: e.name,
    };
  });

  const EventsTable = () => {
    const columns = useMemo(() => tableCols, []);

    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable({
      columns,
      data: tableData,
    });

    return (
      <styled.Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <styled.Th {...column.getHeaderProps()}>{column.render("Header")}</styled.Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <styled.Td {...cell.getCellProps()}>{cell.render("Cell")}</styled.Td>;
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((group) => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map((column) => (
                <styled.TdFooter {...column.getFooterProps()}>{column.render("Footer")}</styled.TdFooter>
              ))}
            </tr>
          ))}
        </tfoot>
      </styled.Table>
    );
  };

  return (
    <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
      <div style={{ backgroundColor: "#FAFAFA", minHeight: "100vh", padding: "50px 0" }}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Link to={"/"}>
                <styled.Logo src={LogoSrc} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Typo2>Attendees And Exhibitors Imported</Typo2>
            </Col>
          </Row>
          <SpaceH of={16} />
          <Row>
            <Col xs={4}>
              <styled.Label>Select your organization</styled.Label>
              <StyledSelectSearch theme="gray">
                <SelectSearch
                  options={organizations}
                  onChange={setOrganization}
                  search
                  value={organization}
                  getOptions={(e) => console.log("opt", e)}
                  printOptions={(e) => console.log("opt", e)}
                  name="organization"
                  placeholder="Organization"
                />
              </StyledSelectSearch>
            </Col>
          </Row>
          <SpaceH of={42} />

          {organization && (
            <Row>
              <Col xs={12}>
                <Typo3>Events</Typo3>
                <SpaceH of={6} />
                <styled.Label>Only the organizer administrator can view all events</styled.Label>
                <SpaceH of={16} />
                {showTable && <EventsTable />}
              </Col>
            </Row>
          )}
        </Grid>
      </div>
    </Layout>
  );
};

export default withLocation(Events);

export const query = graphql`
  query Events {
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
