function buildChangeEvent(options = {}) {
  let event = document.createEvent('Events');
  event.initEvent('change', true, true);
  event = Object.assign(event, options);
  return event;
}

export default function (selector, file) {
  let changeEvent = buildChangeEvent({ testingFiles: [file] });
  document.querySelector(selector).dispatchEvent(changeEvent);
}
