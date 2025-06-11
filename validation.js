document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const passwordStrength = document.getElementById("password-strength");

  function validateEmail(email) {
    const re = /^[\w.-]+@[\w.-]+\.\w+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^(\d{10}|\d{3}[-. ]\d{3}[-. ]\d{4})$/;
    return re.test(phone);
  }

  function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;

    if (strength >= 4) {
      passwordStrength.textContent = "Strong Password";
      passwordStrength.style.color = "green";
    } else if (strength >= 3) {
      passwordStrength.textContent = "Medium Strength";
      passwordStrength.style.color = "orange";
    } else {
      passwordStrength.textContent = "Poor Password";
      passwordStrength.style.color = "red";
    }
  }

  if (passwordInput) {
    passwordInput.addEventListener("input", () => {
      checkPasswordStrength(passwordInput.value);
    });
  }

  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Always prevent default submission first

      if (!validateEmail(emailInput.value)) {
        alert("Invalid email address!");
        return;
      }

      if (!validatePhone(phoneInput.value)) {
        alert("Invalid phone number! Use 10 digits or formats like XXX-XXX-XXXX, XXX.XXX.XXXX, or XXX XXX XXXX.");
        return;
      }

      if (passwordStrength.textContent === "Poor Password") {
        alert("Please choose a stronger password.");
        return;
      }

      window.location.href = "signup-success.html";
    });
  }
});
