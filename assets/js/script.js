const emailInput = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");
const submitBtn = document.querySelector(".submit-btn");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const isValidEmail = validateEmail(email);

  if (!isValidEmail) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});
