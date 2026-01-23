const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailFeedback = document.getElementById("email-feedback");
const passwordFeedback = document.getElementById("password-feedback");
const submitBtn = document.getElementById("submit-btn");
const status = document.getElementById("form-status");

const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
};

function setFeedback(el, message, type) {
  el.textContent = message;
  el.className = `feedback ${type}`;
}

function validateEmail(email) {
  return patterns.email.test(email.trim());
}

function validatePassword(password) {
  return patterns.password.test(password);
}

function updateFormState() {
  const emailValid = validateEmail(emailInput.value);
  const passwordValid = validatePassword(passwordInput.value);

  submitBtn.disabled = !(emailValid && passwordValid);
}

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() === "") {
    setFeedback(emailFeedback, "Email is required.", "error");
  } else if (!validateEmail(emailInput.value)) {
    setFeedback(emailFeedback, "Enter a valid email address.", "error");
  } else {
    setFeedback(emailFeedback, "Email looks good ✅", "success");
  }
  updateFormState();
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value === "") {
    setFeedback(passwordFeedback, "Password is required.", "error");
  } else if (!validatePassword(passwordInput.value)) {
    setFeedback(passwordFeedback, "Min 8 chars and at least 1 number.", "error");
  } else {
    setFeedback(passwordFeedback, "Strong password ✅", "success");
  }
  updateFormState();
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // ✅ prevent default form submission

  status.textContent = "Account created successfully 🎉";
  status.className = "status success";

  form.reset();
  submitBtn.disabled = true;

  emailFeedback.textContent = "";
  passwordFeedback.textContent = "";
});
