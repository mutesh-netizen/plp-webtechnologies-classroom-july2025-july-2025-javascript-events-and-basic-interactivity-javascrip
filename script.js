// Part 1: Event Handling
const alertButton = document.getElementById("alertButton");
const hoverText = document.getElementById("hoverText");

alertButton.addEventListener("click", () => {
  alert("You clicked the button!");
});

hoverText.addEventListener("mouseover", () => {
  hoverText.textContent = "Thanks for hovering!";
});

hoverText.addEventListener("mouseout", () => {
  hoverText.textContent = "Hover over me!";
});

// Part 2: Interactive Elements

// Light/Dark mode toggle
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const incrementBtn = document.getElementById("incrementBtn");
const counterValue = document.getElementById("counterValue");

incrementBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let valid = true;
  formMessage.textContent = "";

  // Clear previous errors
  clearErrors();

  // Name validation: at least 2 letters, only letters and spaces
  if (!/^[a-zA-Z\s]{2,}$/.test(nameInput.value.trim())) {
    showError(nameInput, "Name must be at least 2 letters and contain only letters.");
    valid = false;
  } else {
    markValid(nameInput);
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email.");
    valid = false;
  } else {
    markValid(emailInput);
  }

  // Password validation: at least 6 chars, one number
  if (!/^(?=.*\d).{6,}$/.test(passwordInput.value)) {
    showError(passwordInput, "Password must be at least 6 characters and include a number.");
    valid = false;
  } else {
    markValid(passwordInput);
  }

  if (valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
    form.reset();
    clearInputStyles();
  }
});

function showError(input, message) {
  const errorEl = input.nextElementSibling;
  errorEl.textContent = message;
  input.classList.add("invalid");
  input.classList.remove("valid");
}

function markValid(input) {
  input.classList.add("valid");
  input.classList.remove("invalid");
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach((el) => (el.textContent = ""));
}

function clearInputStyles() {
  [nameInput, emailInput, passwordInput].forEach((input) => {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  });
}
