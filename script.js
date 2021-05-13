function generateButtons() {
  let inputNumber = document.getElementById('inp').value;
  let buttons = document.getElementsByTagName("body")[0];
  var button ="";
  var randomButtonNr = Math.ceil(Math.random() * inputNumber);
  for (let i = 1; i <= inputNumber; i++) {
    button = document.createElement("button");
    button.innerHTML = 'Button ' + i;
    buttons.appendChild(button);
    button.onclick = function() {
        pressButton(i);
      };
  }
  function pressButton(currentButton) {  
    if (randomButtonNr == currentButton) {
      document.getElementById("print").innerHTML = "Congratulations! You got it right";
    }
    else {
      document.getElementById("print").innerHTML = "Wrong button";
    }
  }   
}