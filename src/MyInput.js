import { html, define, dispatch } from "./helpers.js";

export function onInput(host, { target }) {
  host.value = target.value;
  host.isValid = target.checkValidity();

  const { value, isValid } = host;

  dispatch(host, "test", {
    detail: { value, isValid },
  });
}

export const MyInput = {
  value: "",
  isValid: false,
  render: ({ value }) => html`<input type="email" oninput="${onInput}" />`,
};

define("my-input", MyInput);
