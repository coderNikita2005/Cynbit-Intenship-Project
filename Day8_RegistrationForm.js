const form = document.getElementById("registrationForm");
const errorDiv = document.getElementById("error-msg");
const successDiv = document.getElementById("success-msg");
const strengthMsg = document.getElementById("strength-msg");
const passwordInput = document.getElementById("password");

function checkStrength(password) {
  if (password.length < 6) {
    strengthMsg.textContent = "Weak password";
    strengthMsg.style.color = "red";
  } else if (password.length <= 8) {
    strengthMsg.textContent = "Moderate password";
    strengthMsg.style.color = "orange";
  } else {
    strengthMsg.textContent = "Strong password";
    strengthMsg.style.color = "green";
  }
}

passwordInput.addEventListener("input", () => {
  checkStrength(passwordInput.value);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorDiv.textContent = "";
  successDiv.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const year = document.getElementById("year").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !branch || !year || !password) {
    errorDiv.textContent = "Please fill in all fields.";
    return;
  }

  if (!email.includes("@")) {
    errorDiv.textContent = "Invalid email address.";
    return;
  }

  if (password.length < 6) {
    errorDiv.textContent = "Password must be at least 6 characters.";
    return;
  }

  successDiv.textContent = "Registration Successful 🎉";
  form.reset();
  strengthMsg.textContent="";
});
