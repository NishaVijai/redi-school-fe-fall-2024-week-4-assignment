console.log("Week 4 - class assignment");

const orderFoodFromDifferentRestaurants = (restaurantName, foodName, amountOfFood) => `You are ordering ${amountOfFood} ${foodName} from ${restaurantName}`;

console.log(orderFoodFromDifferentRestaurants("Omo's Pizza", "Chicken Pizza", 5));

// **************

// Exercise
// A. Create 3 html element divs
// a. Add some text to each of them
// b. One div should have an id
// c. One div should have a class attribute
// d. One div has none of the above
// e. Give them color and
// B. Try accessing the divs using the methods explained before and
// log their text content

const first_div_element = document.getElementById("first_div");

// Not working
// Can get only array of Elements - can not apply style on this fetched variable.
// const second_div_element = document.getElementsByClassName("second_div");

// Working - to apply background color on the element
const second_div_element = document.querySelector(".second_div");

// Not working
// Can get only array of Elements - can not apply style on this fetched variable.
// const third_div_element = document.getElementsByTagName("div");

// Working - grabbin the first div
// const third_div_element = document.querySelector("div");
const third_div_element = document.querySelectorAll("div")[2];

const read_more_button_element = document.getElementById("read_more_button");

// Add html element and text inside divs
first_div_element.innerHTML = "<p>First div content with Id</p>";
// first_div_element.textContent = "Test changing - First div content";

second_div_element.innerHTML = "<p>Second div content with class</p>";
third_div_element.innerHTML = "<p>Third div content without Id or class</p>";

// Disable button using JS
read_more_button_element.setAttribute("disabled", true);

// Log elements on console
console.log(first_div_element);
console.log(second_div_element);
console.log(third_div_element);
console.log(read_more_button_element);

// Log elements text content
console.log(first_div_element.textContent);
console.log(second_div_element.textContent);
console.log(third_div_element.textContent);

// Add background color to the divs
first_div_element.style.height = "100px";
first_div_element.style.width = "300px";
first_div_element.style.border = "2px solid red";
first_div_element.style.backgroundColor = "#eb997b";

second_div_element.style.height = "100px";
second_div_element.style.width = "300px";
second_div_element.style.border = "2px solid green";
second_div_element.style.backgroundColor = "#85586e";

third_div_element.style.height = "100px";
third_div_element.style.width = "300px";
third_div_element.style.border = "2px solid blue";
third_div_element.style.backgroundColor = "#a4f4d3";

// -------------------------------------

// Add a p element inside a new div & append it as a last div on the DOM

const mainElement = document.querySelector("main");
const createFirstNewDivElement = document.createElement("div");
mainElement.appendChild(createFirstNewDivElement);
const createFirstNewPElement = document.createElement("p");
createFirstNewDivElement.appendChild(createFirstNewPElement);
createFirstNewPElement.textContent = "First New P Element";

// Add style to createFirstNewPElement
createFirstNewPElement.style.color = "#a600ff";
createFirstNewPElement.style.fontSize = "36px";

// Add a new class attribute with class name to createFirstNewPElement
createFirstNewPElement.classList.add("first_new_p_element");

// Remove class name from createFirstNewPElement
createFirstNewPElement.classList.remove("first_new_p_element");

// Remove class attribute from createFirstNewPElement
createFirstNewPElement.removeAttribute("class");

const createSecondNewPElement = document.createElement("p");
createFirstNewDivElement.appendChild(createSecondNewPElement);
createSecondNewPElement.textContent = "Second New P Element";

// Remove createSecondNewPElement
// createSecondNewPElement.remove();

// -------------------------------------

// Exercise
// A. Use the HTML content you created in the
// exercise above
// a. Add a new div to the bottom with black background
// b. Remove the first div
// c. Change the background color of the middle div
// d. Hide one of the divs using a class name and visibility: hidden

// a. Add a new div to the bottom with black background
const createSecondNewDivElement = document.createElement("div");
mainElement.appendChild(createSecondNewDivElement);
const createThirdNewPElement = document.createElement("p");
createSecondNewDivElement.appendChild(createThirdNewPElement);
createThirdNewPElement.textContent = "Third New P Element";

createSecondNewDivElement.style.height = "100px";
createSecondNewDivElement.style.width = "300px";
createSecondNewDivElement.style.border = "2px solid #0dff00";
createSecondNewDivElement.style.backgroundColor = "black";
createSecondNewDivElement.style.color = "#e8dddd";

// b. Remove the first div
// first_div_element.remove();

// c. Change the background color of the middle div
second_div_element.style.backgroundColor = "#b67aaf";

// d. Hide one of the divs using a class name and visibility: hidden
createSecondNewDivElement.classList.add("hide_element");
createSecondNewDivElement.classList.remove("hide_element");

// -------------------------------------
