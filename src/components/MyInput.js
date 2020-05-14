import { html, define, dispatch } from "../helpers.js";
import { inputStyles } from "./MyStyles.js";

export function onInput(host, { target }) {
  host.value = target.value;
  host.isValid = target.checkValidity();

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
  render: ({ disabled, isValid, value }) =>
    html` <style>
        ${inputStyles}
      </style>
      <input
        class="input ${value !== "" ? (isValid ? "valid" : "invalid") : ""}"
        type="email"
        disabled="${disabled}"
        oninput="${onInput}"
        onkeypress="${onkeypress}"
      />`,
};

define("my-input", MyInput);
