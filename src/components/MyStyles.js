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

.form {
  display: flex;
}
my-input{
  flex: 1;
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
  box-sizing: border-box;
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 2px solid hsl(214, 14%, 78%);
  border-right: none;
  outline: none;
  color: hsl(215, 18%, 57%);
  font-size: 1rem;
  background: white;
}

.input::placeholder{
  color: hsl(215, 18%, 75%);
}

.input:hover{
  background: #fbfcfe;
  border-color: #a5aebb;
}

.input:hover::placeholder{
  color: hsl(215, 18%, 70%);
}

.input:focus{
  border-color: hsl(215, 18%, 57%);
  background: #fbfcfe;
  color: hsl(215, 18%, 57%);
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

const buttonStyles = `
.button{
  font-family: "Font Awesome 5 Free";
  box-sizing: border-box;
  display: block;
  padding: 1rem 1.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  border: 3px solid hsl(214, 14%, 78%);
  outline: none;
  color: hsl(215, 18%, 57%);
  font-size: 1rem;
  background: hsl(214, 14%, 78%);
  cursor: not-allowed;
}

.button:hover{
  background: hsl(214, 14%, 80%);
  border-color: hsl(214, 14%, 80%);
  color: hsl(215, 18%, 59%);
}

.button.invalid{
  background: hsl(0, 58%, 63%);
  border-color: hsl(0, 58%, 63%);
  color: hsl(0, 58%, 35%);
  cursor: not-allowed;
}

.button.invalid:hover{
  background: hsl(0, 58%, 65%);
  border-color: hsl(0, 58%, 65%);
  color: hsl(0, 58%, 37%);
}

.button.valid{
  background:hsl(144, 36%, 57%);
  border-color: hsl(144, 36%, 57%);
  color: hsl(144, 36%, 98%);
  cursor: pointer;
}

.button.valid:hover{
  background:hsl(144, 36%, 59%);
  border-color: hsl(144, 36%, 59%);
  color: hsl(144, 36%, 96%);
}

.button.valid:focus{
  background:hsl(144, 36%, 52%);
  border-color: hsl(144, 36%, 52%);
  color: hsl(144, 36%, 100%);
}
`;

export { containerStyles, inputStyles, buttonStyles };
