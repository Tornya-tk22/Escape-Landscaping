import { updateTime, welcomeByTime } from "./time.js";

// Display admin name
const adminNameEl = document.getElementById("adminName");
const storedName = localStorage.getItem("adminName");

if (storedName) {
    adminNameEl.textContent = storedName;
} else {
    adminNameEl.textContent = "Admin";
    // Optional: redirect to login if not logged in
    // window.location.href = "adminLogin.html";
}

// Logout
document.getElementById("signOutBtn").addEventListener("click", () => {
    localStorage.removeItem("adminName");
    window.location.href = "adminLogin.html";
});

// Display number of customers
const registeredCustomersEl = document.getElementById("registeredCustomers");
const Registered_Customers = JSON.parse(localStorage.getItem("Registered-Customers")) || [];
registeredCustomersEl.textContent = Registered_Customers.length;

// Display number of workers
const registeredWorkersEl = document.getElementById("registeredWorkers");
const Registered_Workers = JSON.parse(localStorage.getItem("Registered-Workers")) || [];
registeredWorkersEl.textContent = Registered_Workers.length;

// Optional: display total users and progress bar
const totalUsers = Registered_Customers.length + Registered_Workers.length;
const goalUsers = 500; // Example target
const progressBar = document.getElementById("userProgressBar"); // create in HTML

if (progressBar) {
    const percentage = Math.min((totalUsers / goalUsers) * 100, 100);
    progressBar.style.width = percentage + "%";
}

// Initialize time and greeting
updateTime();
welcomeByTime();
