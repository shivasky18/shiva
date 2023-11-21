function formatUserDate(inputDate) {
    const parts = inputDate.split('/');
    if (parts.length !== 3) {
        return 'Invalid date format';
// Uncomment the email validation function if needed
/*
function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailPattern.test(email)) {
        document.getElementById('validationResult').textContent = "";
    } else {
        document.getElementById('validationResult').textContent = "Email is not valid.";
    }
}
*/

    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10) - 1; // Months in JavaScript are 0-indexed
    const year = parseInt(parts[2], 10);
function formatDate(inputDate) {
    const [day, month, year] = inputDate.split('/');
    const date = new Date(year, month - 1, day);

    const date = new Date(year, month, day);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
}

function validateDate() {
    const dateInput = document.getElementById("dob");
    const selectedDate = new Date(dateInput.value);
    const maxDate = new Date(dateInput.max);
    const minDate = new Date(dateInput.min);
function restrict() {
    var dateInput = document.getElementById("dob");
    var selectedDate = new Date(dateInput.value);

    var maxD = new Date(dateInput.max);
    var minD = new Date(dateInput.min);

    if (selectedDate < minDate) {
        alert("Age should be less than " + formatUserDate(dateInput.max));
    } else if (selectedDate > maxDate) {
        alert("Age should be less than " + formatUserDate(dateInput.min));
    if (selectedDate < minD || selectedDate > maxD) {
        document.getElementById('dob').textContent = "Age should be between " + formatDate(dateInput.min) + " and " + formatDate(dateInput.max);
    } else {
        document.getElementById('dob').textContent = "";
    }
}

function setInitialState() {
    const dateInput = document.getElementById("dob");
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());
function initialState() {
    var dateInput = document.getElementById("dob");
    var today = new Date();
    var maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    var minDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());

    dateInput.setAttribute("min", minDate.toISOString().split('T')[0]);
    dateInput.setAttribute("max", maxDate.toISOString().split('T')[0]);
    dateInput.setAttribute("min", formatDate(minDate.toLocaleDateString()));
    dateInput.setAttribute("max", formatDate(maxDate.toLocaleDateString()));
}

window.onload = setInitialState;
window.onload = initialState;

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
@@ -47,34 +56,40 @@ document.addEventListener("DOMContentLoaded", function () {
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = getValue("name");
        const email = getValue("email");
        const pwd = getValue("password");
        const terms = document.getElementById("terms").checked;
        const dob = document.getElementById("dob").value;
        const dob = getValue("dob");

        const newRow = userTableBody.insertRow();
        newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${terms}</td>`;
        newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${pwd}</td><td>${dob}</td><td>${terms}</td>`;
        clearFormFields();

        saveUserEntry(name, email, password, dob, terms);
        saveUserEntry(name, email, pwd, dob, terms);
    });

    function getValue(id) {
        return document.getElementById(id).value;
    }

    function clearFormFields() {
        registrationForm.reset();
    }

    function loadUserEntries() {
        const userEntries = JSON.parse(localStorage.getItem("userEntries")) || [];
        userEntries.forEach(({ name, email, password, dob, terms }) => {
        userEntries.forEach(({ name, email, pwd, dob, terms }) => {
            const newRow = userTableBody.insertRow();
            newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${terms}</td>`;
            newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${pwd}</td><td>${dob}</td><td>${terms}</td>`;
        });
    }

    function saveUserEntry(name, email, password, dob, terms) {
    function saveUserEntry(name, email, pwd, dob, terms) {
        const userEntries = JSON.parse(localStorage.getItem("userEntries")) || [];
        userEntries.push({ name, email, password, dob, terms });
        userEntries.push({ name, email, pwd, dob, terms });
        localStorage.setItem("userEntries", JSON.stringify(userEntries));

        loadUserEntries();
    }
});
