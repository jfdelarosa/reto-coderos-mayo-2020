import { html, define } from "./helpers.js";
import "./MyInput.js";

export function onSubmit(host, event) {
  console.log({ host, event });
}

export function onChange(host, event) {
  host.isValid = event.detail.isValid;
  host.value = event.detail.value;
}

const errorMessage = () => html`<span>Error</span>`;

export const MyApp = {
  isValid: true,
  render: ({ isValid }) => html`
    <div class="container">
      <form onsubmit="${onSubmit}">
        ${isValid ? "" : errorMessage()}
        <my-input ontest=${onChange} />
      </form>
    </div>
  `,
};

define("my-app", MyApp);
