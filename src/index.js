import { html, define } from "./helpers.js";
import "./components/MyInput.js";
import "./components/MyButton.js";
import "./components/MyFigure.js";
import { containerStyles } from "./components/MyStyles.js";

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

    host.submitted = !!data.token;
    host.loading = false;
  } catch (error) {
    console.log(error);
  }
}

export function onChange(host, { detail }) {
  host.isValid = detail.isValid;
  host.value = detail.value;
}

export const MyApp = {
  loading: false,
  isValid: true,
  value: "",
  submitted: false,
  render: ({ loading, isValid, value, submitted }) => {
    let content;
    if (submitted) {
      content = html` <h1>¡Gracias!</h1>
        <h2>Revisa tu bandeja de entrada para continuar...</h2>`;
    } else {
      content = html`
        <div class="form-container">
          <h1>¡Suscríbete!</h1>
          <h2>
            Recibe todas las novedades de nuestro sitio web en tu bandeja de
            entrada.
          </h2>
          <div class="form">
            <my-input
              disabled="${loading}"
              onmy-input=${onChange}
              onmy-submit="${onSubmit}"
            ></my-input>
            <my-button
              valid="${value !== "" ? (isValid ? "valid" : "invalid") : ""}"
              disabled="${loading || !isValid || value === ""}"
              loading="${loading}"
              onmy-click="${onSubmit}"
            ></my-button>
          </div>
          <div class="error ${isValid ? "hidden" : ""}">
            El correo no es valido
          </div>
        </div>
        <div class="figure">
          <my-figure></my-figure>
        </div>
      `;
    }
    return html`
      <style>
        ${containerStyles}
      </style>
      <div class="${submitted ? "submitted" : "not-submitted"}">
        <div class="container">
          ${content}
        </div>
      </div>
    `;
  },
};

define("my-app", MyApp);
