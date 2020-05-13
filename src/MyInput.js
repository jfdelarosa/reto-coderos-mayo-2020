import { html, define } from "./helpers.js";

export function onInput(host, event) {
  host.value = event.target.value;
}

export const MyInput = {
  value: "",
  render: ({ value }) => html` <span>${value}</span>
    <input type="email" oninput="${onInput}" />`,
};

define("my-input", MyInput);
