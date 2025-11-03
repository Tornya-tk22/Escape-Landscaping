const form = document.getElementById("workerLoginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const workerID = document.getElementById("workerId").value.trim();
    const password = document.getElementById("password").value.trim();

    let registeredWorkers = JSON.parse(localStorage.getItem("Registered-Workers")) || [];

    // Find a customer with matching email and password
    const worker = registeredWorkers.find(c => c.id === workerID && c.password === password);

    if (worker) {
        alert(`Login Successful, ${worker.name}!`);
        // You can redirect to dashboard if needed
        // window.location.href = "customerDashboard.html";
    } else {
        alert("Invalid email or password!");
        form.reset();
    }
});