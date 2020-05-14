import { html, define, dispatch } from "../helpers.js";
import { buttonStyles } from "./MyStyles.js";

export function onClick(host, event) {
  event.preventDefault();
  dispatch(host, "my-click");
}

export const MyButton = {
  disabled: false,
  valid: "",
  render: ({ disabled, valid }) =>
    html`<style>
        ${buttonStyles}
      </style>
      <button
        class="button ${valid}"
        onclick="${onClick}"
        value="Enviar"
        disabled="${disabled}"
      >
        
      </button>`,
};

define("my-button", MyButton);
