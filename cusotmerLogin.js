const form = document.getElementById("customerLoginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get all registered customers
  const registeredCustomers = JSON.parse(localStorage.getItem("Registered-Customers")) || [];

  // Find matching customer
  const customer = registeredCustomers.find(c => c.email === email && c.password === password);

  if (customer) {
    alert(`Login Successful, ${customer.name}!`);

    // Store the logged-in customer's data in localStorage
    localStorage.setItem("loggedInCustomer", JSON.stringify(customer));

    // Optional redirect after login
    window.location.href = "customerDashboard.html";
  } else {
    alert("Invalid email or password!");
    form.reset();
  }
});
