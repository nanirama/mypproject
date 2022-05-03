import React, { useState, useReducer, useEffect } from "react";
import { graphql } from "gatsby";
import { Row, Col } from "react-flexbox-grid";
import styled, { ThemeProvider } from "styled-components";
import { Select } from "../../form/select";
import { Body, Typo2, Typo3 } from "../../typographie";
import { SpaceH } from "../../space";
import Label from "../../form/label";
import { DateSingleInput } from "@datepicker-react/styled";
import { media } from "../../utils/style-utils";
import { getUser } from "../../../HOC/auth";
import { Input, Textarea } from "../../form/input";
import Submit from "../../form/submit";
import axios from "axios";
import moment from "moment";
import withLocation from "../../../HOC/location";
import { isValidEmail } from "../../utils/helper";
import SelectSearch from "react-select-search";
import { Answer, Calendar, StyledSelectSearch, Link } from "./styled";
import { ButtonSecondary } from "../../button";
import ClientOnly from "../../../HOC/clients";

const Wrapper = styled.div`
  max-width: 550px;
  padding: 80px 10px 0;
  ${media.tablet`
  padding-top:0;
  margin: 120px auto 50px auto;
  `};
`;

function isValidInput(value) {
  return value && value !== "null" && value.trim() !== "";
}

const Support = ({ ...props }) => {
  const initialState = {
    date: null,
    showDatepicker: false,
    showFaqAnswer: false,
    showQuestionField: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "focusChange":
        return { ...state, showDatepicker: action.payload };
      case "dateChange":
        return action.payload;
      case "faqQuestionChosen":
        return { ...state, showFaqAnswer: true, showQuestionField: false };
      case "wantCustomQuestion":
        return { ...state, showFaqAnswer: false, showQuestionField: true };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState(props.search.name || "");
  const [email, setEmail] = useState(props.search.email || "");
  const [eventName, setEventName] = useState("");
  const [eventStatus, setEventStatus] = useState("");
  const [eventBeginsAt, setEventBeginsAt] = useState(null);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [eventTimezone, setEventTimezone] = useState("");
  const [eventId, setEventId] = useState("");
  const [aboutYou, setAboutYou] = useState(null);
  // const [timezone, setTimezone] = useState();
  const [user, setUser] = useState();
  const [eventInfo, setEventInfo] = useState(null);
  const [formSubmited, setFormSubmited] = useState(false);
  const [faqQuestion, setFaqQuestion] = useState("");

  const t = props.data.primary;
  const f = props.data.items;

  const [validFormV2, setValidForm2] = useState(true);

  useEffect(() => {
    setEventBeginsAt(state.date);
  }, [state.date]);

  useEffect(() => {
    const event = JSON.parse(eventInfo);
    if (event) {
      setEventName(event.title);
      setEventId(event._id);
      setEventBeginsAt(event.beginsAt);
      setEventStatus(event.eventStatus);
    }
  }, [eventInfo]);

  useEffect(() => {
    if (faqQuestion) {
      dispatch({ type: "faqQuestionChosen" });
    }
  }, [faqQuestion]);

  const faqData = f.map((e) => {
    return {
      value: e.faq_question,
      name: e.faq_question,
      answer: e.faq_answer.html,
    };
  });

  useEffect(() => {
    if (!props.search.entity) {
      window.location = "https://help-attendees.swapcard.com/hc/en-us/requests/new";

      if (props.lang === "fr-fr") window.location = "https://www.swapcard.com/fr/support/?entity=attendee";
      else window.location = "https://www.swapcard.com/support/?entity=attendee";
    }
    if (props.search.entity && props.search.entity === "organizer") {
      window.location = "https://help.swapcard.com/hc/en-us/requests/new";
      setAboutYou("organizer");
    } else {
      window.location = "https://help-attendees.swapcard.com/hc/en-us/requests/new";
    }
  });

  const entity = props.search.entity;

  useEffect(() => {
    const valid =
      isValidInput(name) &&
      isValidEmail(email) &&
      isValidInput(message) &&
      isValidInput(eventTimezone) &&
      isValidInput(aboutYou);
    console.log(name, email, message, eventTimezone, aboutYou);
    setValidForm2(valid);
  }, [name, email, message, eventTimezone, aboutYou]);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUser();
      if (data) setUser(data.me);
      if (data && data.me && data.me.user) {
        setEmail(data.me.user.primaryEmail);
        setUserId(data.me.user._id);
        setName(data.me.user.firstName + " " + data.me.user.lastName);
      }
      if (data && data.me.events && data.me.events.edges && data.me.events.edges.length > 0) {
        setEventName(data.me.events.edges[0].node.title);
        setEventId(data.me.events.edges[0].node._id);
        setEventBeginsAt(data.me.events.edges[0].node.beginsAt);
        setEventStatus(data.me.events.edges[0].node.eventStatus);
      }
    };
    getUserData();
  }, []);

  const submitForm = () => {
    const data = {
      name: name.trim(),
      email: email.trim(),
      eventName: eventName,
      eventId: eventId,
      ...(eventBeginsAt && {
        eventBeginsAt: moment(eventBeginsAt).format("YYYY-MM-DD"),
      }),
      userId: userId.toString(),
      eventStatus,
      message,
      aboutYou: aboutYou && aboutYou !== "null" ? aboutYou : "organizer",
      entity,
      eventTimezone,
    };

    axios({
      method: "post",
      url: "https://hooks.zapier.com/hooks/catch/678062/ocs8qel/",
      data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      window.scrollTo({ top: 100 });
      setFormSubmited(true);
    });
  };

  return (
    <Wrapper>
      <>
        <Typo2 center>{props.data.primary.form_title}</Typo2>
        <SpaceH of={16} />
        <Body center>{props.data.primary.form_sub_title}</Body>
      </>
      <SpaceH of={16} />
      {formSubmited && (
        <div style={{ margin: "70px 0 120px 0" }}>
          <Typo3 center>{props.data.primary.form_success}</Typo3>
        </div>
      )}
      {!formSubmited && (
        <>
          <Row>
            <Col md={6} xs={12}>
              <Label>{props.data.primary.form_input_name}</Label>
              <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </Col>
            <Col md={6} xs={12}>
              <Label>{props.data.primary.form_input_email}</Label>
              <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Col>
          </Row>
          <SpaceH of={12} />
          <Row>
            <Col md={12} xs={12}>
              {props.lang === "fr-fr" ? (
                <Label>Fuseau horaire de votre événement</Label>
              ) : (
                <Label>Timezone of your event</Label>
              )}
              <Select
                onChange={(e) => setEventTimezone(e.target.value)}
                name="event_timezone"
                options={[
                  { value: "null", label: "Please select" },
                  { value: "america_est/cst", label: "America EST/CST" },
                  { value: "america_pst", label: "America PST" },
                  { value: "europe", label: "Europe" },
                  { value: "middle_east", label: props.lang === "fr-fr" ? "Moyen-Orient" : "Middle East" },
                  { value: "asia", label: props.lang === "fr-fr" ? "Asie" : "Asia" },
                ]}
              />
            </Col>
          </Row>
          <SpaceH of={12} />
          <Row>
            {props.search && props.search.entity === "attendee" && (
              <>
                <Col md={user ? 12 : 6} xs={12}>
                  <Label>{props.data.primary.entity_question}</Label>
                  <Select
                    onChange={(e) => setAboutYou(e.target.value)}
                    name="entity_selected"
                    options={[
                      { value: "null", label: props.data.primary.please_select },
                      { value: "exhibitor", label: props.data.primary.exhibitor },
                      { value: "attendee", label: props.lang === "fr-fr" ? "Participant" : "Attendee" },
                      { value: "organizer", label: props.lang === "fr-fr" ? "Organisateur" : "Organizer" },
                    ]}
                  />
                </Col>
                {!user && (
                  <Col md={6} xs={12}>
                    <Label>{props.data.primary.event_date}</Label>
                    <ThemeProvider
                      theme={{
                        breakpoints: ["32em", "48em", "64em"],
                        reactDatepicker: {
                          daySize: [36, 40],
                          fontFamily: "system-ui, -apple-system",
                          inputMinHeight: 39,

                          colors: {
                            graci: "#D5D2D9",
                            accessibility: "#00cc88",
                            selectedDay: "#00cc88",
                            selectedDayHover: "#00cc88",
                            primaryColor: "#00cc88",
                          },
                        },
                      }}
                    >
                      <Calendar>
                        <DateSingleInput
                          onDateChange={(data) => dispatch({ type: "dateChange", payload: data })}
                          onFocusChange={(focusedInput) => dispatch({ type: "focusChange", payload: focusedInput })}
                          date={state.date} // Date or null
                          phrases={{ datePlaceholder: props.data.primary.event_date_placeholder }}
                          showDatepicker={state.showDatepicker} // Boolean
                        />
                      </Calendar>
                    </ThemeProvider>
                  </Col>
                )}
              </>
            )}
          </Row>
          <SpaceH of={8} />
          {user && user.events && user.events.edges && user.events.edges.length > 0 ? (
            <>
              <Row>
                <Col md={12} xs={12}>
                  <Label>
                    {props.search && props.search.entity === "attendee" ? t.form_input_event_name : t.key_1}
                  </Label>
                  <Select
                    onChange={(e) => setEventInfo(e.target.value)}
                    name="event_info"
                    options={user.events.edges.map((e) => {
                      return {
                        value: JSON.stringify({
                          title: e.node.title,
                          _id: e.node._id,
                          beginsAt: e.node.beginsAt,
                          eventStatus: e.node.eventStatus,
                        }),
                        label: e.node.title,
                      };
                    })}
                  />
                </Col>
              </Row>
            </>
          ) : (
            <>
              {/* <SpaceH of={8} /> */}
              <Label>{props.search && props.search.entity === "attendee" ? t.form_input_event_name : t.key_1}</Label>
              <Input name="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            </>
          )}
          {props.search && props.search.entity === "attendee" && (
            <>
              <SpaceH of={16} />
              <Label>
                {props.lang === "fr-fr" ? "Quel est votre question" : props.data.primary.form_question_from_faq}
              </Label>
              <StyledSelectSearch theme="gray">
                <SelectSearch
                  options={faqData}
                  onChange={setFaqQuestion}
                  search
                  value={faqQuestion}
                  name="faqQuestion"
                  placeholder={t.form_question_from_faq_placeholder}
                />
              </StyledSelectSearch>
              <SpaceH of={4} />
              <Link onClick={() => dispatch({ type: "wantCustomQuestion" })}>{t.form_didn_t_find_your_question}</Link>
            </>
          )}
          <SpaceH of={8} />

          {state.showFaqAnswer && (
            <>
              <SpaceH of={8} />
              <Answer
                dangerouslySetInnerHTML={{
                  __html: `${faqData.filter((e) => e.value === faqQuestion)[0].answer}`,
                }}
              />
              <SpaceH of={16} />
              <ButtonSecondary
                onClick={() => {
                  dispatch({ type: "wantCustomQuestion" });
                  window.scrollTo({ top: 500 });
                }}
              >
                {t.form_didn_t_find_your_question}
              </ButtonSecondary>
            </>
          )}

          {(state.showQuestionField || entity === "organizer") && (
            <>
              <SpaceH of={16} />
              <Label id={"how_can_we_help"}>{props.data.primary.form_message}</Label>
              <Textarea rows={6} name="message" onChange={(e) => setMessage(e.target.value)} />
              <SpaceH of={8} />

              <Submit value={props.data.primary.form_submit} disabled={!validFormV2} onClick={submitForm} />
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default withLocation(Support);

export const query = graphql`
  fragment supportFragment on PrismicTemplate2 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate2BodyMainSupportForm {
          slice_type
          primary {
            please_select

            key_1

            event_date_placeholder
            event_date
            entity_question
            exhibitor
            attendee

            form_title
            form_sub_title
            form_success
            form_input_name
            form_input_email
            form_input_event_name
            form_question_from_faq
            form_question_from_faq_placeholder
            form_didn_t_find_your_question
            form_message
            form_submit
          }
          items {
            faq_question
            faq_answer {
              html
            }
          }
        }
      }
    }
  }
`;
