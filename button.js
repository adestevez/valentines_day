// Define the list of text to cycle through
var textList = [
    "¿Estás segura?",
    "¿Y si te lo pido muy amablemente?",
    "¿Por favor?",
    "¿Te doy una pizza?",
    "¿Te doy un abrazo?",
    "¿Te doy un beso?",
  ];
  
  var currentIndex = 0;
  
  function resizeButton(selector, scaleFactor) {
    var button = document.querySelector(selector);
    var currentSize = parseFloat(getComputedStyle(button).fontSize);
    var newSize = currentSize * scaleFactor;
    button.style.fontSize = newSize + "px";
  }
  
  function noButtonClick() {
    resizeButton(".yes-button", 1.1);
    resizeButton(".button:not(.yes-button)", 0.9);
  
    // Update the h2 text when the "No" button is clicked
    var h2Element = document.querySelector("h2");
    h2Element.textContent = textList[currentIndex];
    currentIndex = (currentIndex + 1) % textList.length;
  }
  
  function yesButtonClick() {
    // Update the h2 text when the "Yes" button is clicked
    var h2Element = document.querySelector("h2");
    h2Element.textContent = "YESSSS! I KNEW I COULD COUNT ON YOU! LOVE YOU ❤️";
  
    // Hide the buttons
    var buttons = document.querySelectorAll(".button");
    buttons.forEach(function (button) {
      button.style.display = "none";
    });
  
    // Show the image
    var imgElement = document.querySelector("img");
    imgElement.src = "img/zuleta.jpg";
    imgElement.style.visibility = "visible"; // Change visibility to "visible"
  }
  