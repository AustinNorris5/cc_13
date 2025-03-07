//Task 2: Adding Employee Cards Dynamically

//Write a function that uses createElement to build an employee card
function addEmployeeCard(name, position) {
    let card = document.createElement("div");
    card.setAttribute("class", "employeeCard"); //Set attributes (such as class and id) using setAttribute as needed

//A heading for the employee’s name
    let employeeName = document.createElement("h2");
    employeeName.textContent = name;

//A paragraph for the employee’s position
    let employeePosition = document.createElement("p");
    employeePosition.textContent = position;

//A "Remove" button for deleting the card
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "removeButton");
    removeButton.addEventListener("click", () => {
        card.remove();
    });

//Append the employee card to the "employeeContainer" using appendChild
    card.appendChild(employeeName);
    card.appendChild(employeePosition);
    card.appendChild(removeButton);

    let container = document.getElementById("employeeContainer");
    container.appendChild(card);
};

addEmployeeCard("Tyler Herro", "General Manager");
addEmployeeCard("Dwayne Wade", "Office Manager");
addEmployeeCard("Lebron James", "CEO");

//Task 3: Converting NodeLists to Arrays for Bulk Updates

//Use document.querySelectorAll to select all elements with the employee card class
let employeeCards = document.querySelectorAll("employeeCard");

//Convert the NodeList into an array using Array.from or the spread operator
let employeeCardsArray = Array.from(employeeCards);

//Use an array method (e.g., .forEach()) to update each card’s style or add a highlighting class
employeeCardsArray.forEach(card => {
    card.classList.add('highlight');
});
