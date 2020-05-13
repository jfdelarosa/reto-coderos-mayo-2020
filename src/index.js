import { html, define } from "./helpers.js";
import "./MyInput.js";

export function onSubmit(host, event) {
  console.log({ host, event });
}

export function onChange(host, { detail }) {
  host.isValid = detail.isValid;
  host.value = detail.value;
}

const errorMessage = () => html`<span>Error</span>`;

export const MyApp = {
  isValid: true,
  render: ({ isValid }) => html`
    <div class="container">
      <form onsubmit="${onSubmit}">
        ${isValid ? "" : errorMessage()}
        <my-input onchange=${onChange} />
      </form>
    </div>
  `,
};

define("my-app", MyApp);
