import splitbee from "@splitbee/web";

const trackEvent = (event, data) => {
  splitbee.track(event, data);
};

const handleFormSubmit = (data) => {
  splitbee.user.set({
    email: data.email,
    name: data.name,
    last_message: data.message,
  });

  return splitbee.track("Contact form filled", {
    email: data.email,
    name: data.name,
    message: data.message,
  });
};

export { trackEvent, handleFormSubmit };
