const form = document.getElementById("customerSignUpForm");
const ageInput = document.getElementById("age");
const parentContainer = document.getElementById("parentContainer");
const parentCheckbox = document.getElementById("parentCheckBox");

// Show/hide parental approval based on age
ageInput.addEventListener("input", () => {
    const age = parseInt(ageInput.value);

    if (!isNaN(age) && age < 18) {
        parentContainer.style.display = "block";  // show checkbox
        parentCheckbox.required = true;           // required only if visible
    } else {
        parentContainer.style.display = "none";   // hide checkbox
        parentCheckbox.checked = false;           // uncheck it
        parentCheckbox.required = false;          // not required
    }
});

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = parseInt(document.getElementById("age").value.trim());
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const location = document.getElementById("city").value.trim();
    const parentalApproval = parentCheckbox.checked;

    // Password check
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    // Load existing customers
    let registeredCustomers = JSON.parse(localStorage.getItem("Registered-Customers")) || [];

    // Check for duplicate email
    if (registeredCustomers.some(c => c.email === email)) {
        alert("This email is already registered.");
        return;
        form.reset();
    }
    
    

    // Build new customer object
    const newCustomers = {
        name,
        email,
        phone,
        age,
        parentalApproval,
        password,
        location,
        date: new Date().toISOString()
    };

    // Save to localStorage
    registeredCustomers.push(newCustomers);
    localStorage.setItem("Registered-Customers", JSON.stringify(registeredCustomers));

    alert(`Registration Complete!`);
    console.log("Customer Registered:", newCustomers);

    form.reset();
    parentContainer.style.display = "none";  // hide parental section after reset
    parentCheckbox.required = false;
});
