const circle = document.querySelector("#circle");
const containerBody = document.querySelector("#containerBody");
const text = document.querySelector(".text");

circle.addEventListener("click", () => {
  circle.classList.toggle("circleMoon") ? "circleMoon" : "circleSun";
  containerBody.classList.toggle("containerMoon")
    ? "containerMoon"
    : "containerSun";
  if (circle.classList.contains("circleMoon")) {
    text.innerText = "Está escuro, suponho que esteja Noite!";
  } else {
    text.innerText = "Está claro, suponho que esteja Dia!";
  }
});
