// Admin account credentials
const adminAccounts = [
  { name: "Tornyafasaa", email: "tornyafasaakanasuah77@gmail.com" },
  { name: "Wandalachi", email: "wandalachitamba1825@gmail.com" }
];

const adminPassword = "Escape@12345";

// Get the login form
const adminLoginForm = document.getElementById("adminLoginForm");

adminLoginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  const adminFound = adminAccounts.find(admin => admin.email === emailInput);

  if (adminFound && passwordInput === adminPassword) {
    // Store admin info in localStorage
    localStorage.setItem("adminName", adminFound.name);

    alert(`Admin Login Successful. Welcome ${adminFound.name}!`);
    window.location.href = "adminDashboard.html";
  } else {
    alert("Invalid Admin Credentials");
    adminLoginForm.reset();
  }
});
