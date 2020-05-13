import { html, define, dispatch } from "../helpers.js";

export function onInput(host, { target }) {
  dispatch(host, "my-input", {
    detail: { value: target.value, isValid: target.checkValidity() },
  });
}

export function onkeypress(host, event) {
  if (event.which == 13 || event.keyCode == 13) {
    dispatch(host, "my-submit");
  }
}

export const MyInput = {
  value: "",
  disabled: false,
  isValid: true,
  render: ({ disabled, value }) =>
    html`<input
      type="email"
      disabled="${disabled}"
      oninput="${onInput}"
      onkeypress="${onkeypress}"
    />`,
};

define("my-input", MyInput);
