import { welcomeByTime } from "./time.js";
import { updateTime } from "./time.js";

const loggedInCustomerName = document.getElementById("customerName");
const loggedInCustomer = JSON.parse(localStorage.getItem("loggedInCustomer"));

if (loggedInCustomer && loggedInCustomer.name) {
  loggedInCustomerName.textContent = loggedInCustomer.name;
} else {
  loggedInCustomerName.textContent = "Guest";
}

updateTime();
welcomeByTime();
