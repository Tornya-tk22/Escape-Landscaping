const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Optional: close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

//Get the total number of customers in the system
const registeredCustomers = document.getElementById("registeredCustomers");
const Registered_Customers = JSON.parse(localStorage.getItem("Registered-Customers")) || [];

let numberOfCustomers = Registered_Customers.length;
registeredCustomers.textContent = numberOfCustomers;

//Get the total number of workers in the system
const Registered_Workers = JSON.parse(localStorage.getItem("Registered-Workers")) || [];
const registeredWorkers = document.getElementById("registeredWorkers");

let numberOfWorkers = Registered_Workers.length;
registeredWorkers.textContent = numberOfWorkers;

//Get the total number of customers and workers in the system
const userCount = document.getElementById("userCount");
const totalUsers = numberOfCustomers + numberOfWorkers;
userCount.textContent = totalUsers;