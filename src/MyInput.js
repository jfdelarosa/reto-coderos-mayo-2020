import { html, define, dispatch } from "./helpers.js";

export function onInput(host, { target }) {
  dispatch(host, "change", {
    detail: { value: target.value, isValid: target.checkValidity() },
  });
}

export const MyInput = {
  value: "",
  isValid: true,
  render: ({ value }) => html`<input type="email" oninput="${onInput}" />`,
};

define("my-input", MyInput);
