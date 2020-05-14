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

const inputStyles = `
.input{
  padding: 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 2px solid #bfc6cf;
  border-right: none;
  outline: none;
  color: #7e8ea5;
  font-size: 1rem;
  background: white;
}

.input:hover{
  background: #fbfcfe;
  border-color: #a5aebb;
}

.input:focus{
  border-color: #7e8ea5;
  background: #fbfcfe;
  color: #7e8ea5;
}

.input.valid{
  border-color: hsl(144, 36%, 57%);
  color: hsl(144, 36%, 57%);
  background: hsl(150, 40%, 97%);
}

.input.valid:hover{
  border-color: hsl(144, 36%, 55%);
  color: hsl(144, 36%, 55%);
  background: hsl(150, 40%, 98%);
}

.input.invalid{
  border-color: hsl(0, 58%, 63%);
  color: hsl(0, 58%, 63%);
  background: hsl(0, 60%, 98%);
}

.input.invalid:hover{
  border-color: hsl(0, 58%, 61%);
  color: hsl(0, 58%, 61%);
  background: hsl(0, 60%, 99%);
}`;

export { containerStyles, inputStyles };
