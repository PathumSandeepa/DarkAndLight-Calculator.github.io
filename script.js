                          // calculator methamatical part 

// This line selects the element with the ID of "display" and assigns it to the variable "display"
const display = document.querySelector("#display");
// This line selects all elements with the tag "button" and assigns them to the variable "buttons"
const buttons = document.querySelectorAll("button");

  // This block of code sets up an event listener for each button in the "buttons" node list
  buttons.forEach((item) => {
    // When a button is clicked, the anonymous function is executed
    item.onclick = () => {
      // This block of code checks if the button clicked has the class "btn-operator" and the display does not contain a number
      // If both conditions are true, it displays a message on the display for one second before clearing it
      if (item.classList.contains("btn-operator") && !display.innerText.match(/\d/)) {
        display.innerText = "Enter a number first";
        setTimeout(() => (display.innerText = ""), 1000);
        return;
      }
      // This block of code clears the display if the button clicked has the ID "clear"
      if (item.id == "clear") {
        display.innerText = "";
      // This block of code removes the last character from the display if the button clicked has the ID "backspace"
      } else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
      // This block of code evaluates the expression in the display and displays the result if the button clicked has the ID "equal"
      // and the display is not empty
      } else if (display.innerText != "" && item.id == "equal") {
        display.innerText = eval(display.innerText);
      // This block of code displays a message on the display for two seconds if the button clicked has the ID "equal"
      // and the display is empty
      } else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      // This block of code adds the ID of the button clicked to the display for all other cases
      } else {
          display.innerText += item.id;
      }
    };
  });





                        //calculator dark theme an light theme part

// This line selects the element with the class "theme-toggler" and assigns it to the variable "themeToggleBtn"
const themeToggleBtn = document.querySelector(".theme-toggler");
// This line selects the element with the class "calculator" and assigns it to the variable "calculator"
const calculator = document.querySelector(".calculator");
// This line selects the element with the class "moonIcon" and assigns it to the variable "toggleIcon"
const toggleIcon = document.querySelector(".moonIcon");
// This line creates a boolean variable "isDark" and sets its value to "true"
let isDark = true;
// This line sets up an event listener for when the "themeToggleBtn" element is clicked
themeToggleBtn.onclick = () => {
  // This line toggles the "dark" class on the "calculator" element
  calculator.classList.toggle("dark");
  // This line toggles the "active" class on the "themeToggleBtn" element
  themeToggleBtn.classList.toggle("active");
  // This line flips the value of the "isDark" variable
  isDark = !isDark;
};





                       //calculator txt select part desable part

// This line sets up an event listener for the "selectstart" event on the document object
// When the "selectstart" event is triggered, it will execute the anonymous function
document.onselectstart = function() {
  // This line of code returns "false", which cancels the default behavior of the "selectstart" event
  // In this case, the default behavior is for the user to be able to highlight and select text on the page
  // By returning "false", this prevents the user from being able to highlight and select text on the page
  return false;
  }



                        // change background color 

// Set an array of gradient colors to use as the background
const gradients = [
  'linear-gradient(to right top, #2a6fd6, #0096f0, #00b5e5, #00cfbd, #24e387)',
  'linear-gradient(to right top, #f9f941, #ffd417, #ffae00, #ff8600, #f65c19)',
  'linear-gradient(to right top, #32eb39, #80ec1a, #b1ec00, #daeb00, #ffe800)',
  'linear-gradient(to right top, #eb8232, #f79a28, #feb31a, #ffcd08, #ffe800)',
  'linear-gradient(to right top, #007428, #008e4e, #00a974, #00c59b, #10e0c4)',
  'linear-gradient(to right top, #073b3d, #004e6e, #0058a3, #7e4db8, #e01098)',
  'linear-gradient(to right top, #15cf45, #00c44f, #00ba57, #00af5c, #08a460)'
];

// Set a counter to keep track of the current gradient
let counter = 0;
// Set the interval to change the background color every 20 seconds
setInterval(() => {
  // Get the body element
  const body = document.querySelector('body');
  // Set the background color to the current gradient in the array
  body.style.backgroundImage = gradients[counter];
  // Increment the counter
  counter++;
  // If the counter is greater than the number of gradients in the array, reset it to 0
  if (counter >= gradients.length) {
    counter = 0;
  }
}, 5000); // 5 seconds



