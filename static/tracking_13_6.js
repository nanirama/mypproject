// function getFormValue(field) {
//   if (field && field.length > 0 && field[0].value) {
//     return field[0].value;
//   }
//   return undefined;
// }

// window.addEventListener("message", (event) => {
//   console.log(event);

//   if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmit") {
//     const input = event.data.data.reduce((acc, prev) => {
//       return {
//         ...acc,
//         [prev.name]: prev.value,
//       };
//     }, {});

//     if (typeof analytics !== "undefiend" && input.email) {
//       const properties = {
//         form_category: input.zoho_crm_inbound_source,
//         form_id: event.data.id,
//         attendees_volume: input.number_of_attendees,
//         exhibitors_volume: input.how_many_exhibitors_do_you_have_,
//         event_format: input.event_format,
//         is_agency: input.are_you_an_agency_,
//         event_type: input.type_of_event,
//         event_name: input.event_name,
//         company: input.company,
//         job_title: input.jobtitle,
//         language_browser: navigator.language || navigator.userLanguage,
//         form_page_url: window.location.href,
//       };

//       if (
//         input.zoho_crm_inbound_source === "Demo request" ||
//         event.id === "ae497432-13c7-4d2d-b2f5-331180d00aac" ||
//         event.id === "6320e69d-59d7-4068-bdac-2d0044bf8717"
//       ) {
//         analytics.track("Demo Requested", properties);
//       }
//     }
//   }
// });
