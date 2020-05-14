import { html, define } from "./helpers.js";
import "./components/MyInput.js";
import "./components/MyButton.js";
import "./components/MyFigure.js";

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
    <style>
      ::selection {
        background: #d2e2f9;
        color: #3f84e5;
      }
      .container {
        background: white;
        display: flex;
        align-items: center;
        border-radius: 1rem;
        box-shadow: 0 0 2px rgba(9, 31, 63, 0.2), 0 0 4px rgba(9, 31, 63, 0.2),
          0 0 8px rgba(9, 31, 63, 0.2), 0 0 16px rgba(9, 31, 63, 0.2),
          0 0 32px rgba(9, 31, 63, 0.2);
        padding: 4rem 5rem;
        justify-content: space-around;
      }
      .form-container > * {
        margin: 2rem 0;
      }
      form {
      }
      h1 {
        color: #2e81f5;
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
      }
      h2 {
        color: #7989a0;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      .form-container,
      .figure {
        flex: 1;
      }

      .figure {
        display: none;
      }
      @media (min-width: 768px) {
        .figure {
          display: block;
        }
        .form-container {
          padding-right: 3rem;
        }
      }
    </style>
    <div class="container">
      <div class="form-container">
        <h1>¡Suscríbete!</h1>
        <h2>
          Obten todas las novedades de nuestro sitio web en tu bandeja de
          entrada.
        </h2>
        <div class="form">
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
      </div>
      <div class="figure">
        <my-figure></my-figure>
      </div>
    </div>
  `,
};

define("my-app", MyApp);
