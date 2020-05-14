const containerStyles = `
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
    }`;

export { containerStyles };
