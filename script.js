// Assignment Code
function generatePassword() {
  
  // creating length variable to allow the user to choose how many characters are required in the randomly generated password.
  // Value is retrieved through the HTML.
  var length = document.getElementById("passwordLength").value;

  // linking variables to input checkboxes in HTML,
  var uppercase = document.getElementById("uppercase").checked;
  var lowercase = document.getElementById("lowercase").checked;
  var numbers = document.getElementById("numbers").checked;
  var symbols = document.getElementById("symbols").checked;

  // creating password variable which will store data for the created password
  var password = "";

  // if above elements have been checked, they will be included in the 'charset' string and randomly chosen in a for loop.
  var charset = "";

  // if statements have been added to include each charset string into the generator once the input boxes have been checked. 
  // += will concat strings together
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%^&*()_+-=[]{}|;':<>,.?/~";

  // depending on the selected password length and which ever input boxes have been checked, the code executes for the requested
  // password length with the chosen charsets.
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  //password variable value will stored
  document.querySelector("#password").value = password;
}

// targeting the button element within the HTML

const generateBtn = document.querySelector("#generate");

// adding EvenListener so that when the button element has been interacted with by "click". The generatePassword
// function will be executed and will be displayed in the text area element id="password".

generateBtn.addEventListener("click", generatePassword);

        