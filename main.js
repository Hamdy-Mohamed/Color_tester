let input = document.querySelector("input"),
  firstBtn = document.querySelector(".btn"),
  lastBtn = document.querySelector(".btn2"),
  nav = document.querySelector(".nav"),
  footer = document.querySelector(".footer");

input.addEventListener("change", () => {
  inputChange = input.value;
  input.style.color = inputChange
  firstBtn.style.background = inputChange;
  lastBtn.style.background = inputChange;
  nav.style.background = inputChange;
  footer.style.background = inputChange;
});
