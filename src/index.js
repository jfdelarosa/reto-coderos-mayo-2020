import { html, define } from "./helpers.js";
import "./MyInput.js";

export function onSubmit(host, event) {
  console.log({ host, event });
}

export const MyApp = {
  render: () => html`
    <div class="container">
      <form onsubmit="${onSubmit}">
        <my-input />
      </form>
    </div>
  `,
};

define("my-app", MyApp);
