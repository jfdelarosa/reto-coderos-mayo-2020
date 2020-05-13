import { html, define } from "./helpers.js";
import "./components/MyInput.js";
import "./components/MyButton.js";

export async function onSubmit(host, event) {
  try {
    if (!host.isValid || host.value === "") return;
    host.loading = true;
    const body = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };

    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    host.loading = false;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function onChange(host, { detail }) {
  host.isValid = detail.isValid;
  host.value = detail.value;
}

const errorMessage = () => html`<span>Error</span>`;

export const MyApp = {
  loading: false,
  isValid: true,
  value: "",
  render: ({ loading, isValid, value }) => html`
    <div class="container">
      ${isValid ? "" : errorMessage()}
      <my-input
        disabled="${loading}"
        onmy-input=${onChange}
        onmy-submit="${onSubmit}"
      ></my-input>
      <my-button
        disabled="${loading || !isValid || value === ""}"
        onmy-click="${onSubmit}"
      ></my-button>
    </div>
  `,
};

define("my-app", MyApp);
