const form = document.getElementById("workerSignUpForm");
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

    // Load existing workers
    let registeredWorkers = JSON.parse(localStorage.getItem("Registered-Workers")) || [];

    // Check for duplicate email
    if (registeredWorkers.some(c => c.email === email)) {
        alert("This email is already registered.");
        return;
        form.reset();
    }
    function generateWorkerId() {
        return 'W-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    }
    const id = generateWorkerId();

    // Build new worker object
    const newWorker = {
        name,
        email,
        phone,
        age,
        parentalApproval,
        password,
        location,
        id,
        date: new Date().toISOString()
    };

    // Save to localStorage
    registeredWorkers.push(newWorker);
    localStorage.setItem("Registered-Workers", JSON.stringify(registeredWorkers));

    alert(`Registration Complete! Your worker ID:${id}`);
    console.log("Customer Registered:", newWorker);

    form.reset();
    parentContainer.style.display = "none";  // hide parental section after reset
    parentCheckbox.required = false;
});
