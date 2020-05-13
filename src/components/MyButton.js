import { html, define, dispatch } from "../helpers.js";

export function onClick(host, event) {
  event.preventDefault();
  dispatch(host, "my-click");
}

export const MyButton = {
  disabled: false,
  render: ({ disabled }) =>
    html`<input
      type="submit"
      onclick="${onClick}"
      value="Enviar"
      disabled="${disabled}"
    />`,
};

define("my-button", MyButton);
