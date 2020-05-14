import { html, define, dispatch } from "../helpers.js";
import { buttonStyles } from "./MyStyles.js";

export function onClick(host, event) {
  event.preventDefault();
  dispatch(host, "my-click");
}

export const MyButton = {
  disabled: false,
  valid: "",
  loading: false,
  render: ({ disabled, valid, loading }) => {
    const classes = {
      button: true,
      valid: valid === "valid",
      invalid: valid === "invalid",
      loading,
    };

    return html`<style>
        ${buttonStyles}
      </style>
      <button
        class="${classes}"
        onclick="${onClick}"
        value="Enviar"
        disabled="${disabled}"
      >
        <span>
          ${loading ? "" : ""}
        </span>
      </button>`;
  },
};

define("my-button", MyButton);
