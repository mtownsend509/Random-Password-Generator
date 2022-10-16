///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specials = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "~"];

function generatePassword() {

  var newPasswordArray = [];

  var lowerCase = window.confirm ("Use lower case letters?");
  var capital = window.confirm("Use capital letters?");
  var number = window.confirm("Use numbers?");
  var special = window.confirm("Use special characters?");
  var length = window.prompt("Password length? (8-128)");

  if (length >= 8 && length <= 128) {
  } else {
    window.alert("Error: Input not a number between 8 and 128");
    return
  }

  //generates a base password the user specified length made of the first selected character type
  if (lowerCase) {
    for (i=0; i <= (length - 1); i++) {
      newPasswordArray.push(letter[Math.floor(Math.random() * 26)]);
    }
  } else if (capital) {
    for (i=0; i <= (length - 1); i++) {
      newPasswordArray.push(capLetter[Math.floor(Math.random() * 26)]);
    }
  } else if (number) {
    for (i=0; i <= (length - 1); i++) {
      newPasswordArray.push(numbers[Math.floor(Math.random() * 9)]);
    } 
  } else if (special) {
    for (i=0; i <= (length - 1); i++) {
    newPasswordArray.push(specials[Math.floor(Math.random() * (specials.length - 1))]);
    }
  } else {
    window.alert("Error: no character type selected");
    return
  }

  //Adds a random capital letter to index 1, and replaces a random index with a Capital letter at index 2 or higher; does this the newPasswordArray.length # of times 
  if (capital) {
    newPasswordArray.splice(1, 1, capLetter[Math.floor(Math.random() * 26)]);
    for (i=0; i < Math.floor(Math.random() * length); i++) {
      newPasswordArray.splice(Math.floor((Math.random() * (length - 1)) + 1), 1, capLetter[Math.floor(Math.random() * 26)]);
    }
  }

  //Same functionality as above except index 2 is guaranteed to be a number, indexes 3+ randomly change to numbers;
  if (number) {
    newPasswordArray.splice(2, 1, numbers[Math.floor(Math.random() * 9)]);
    for (i=0; i < Math.floor(Math.random() * length); i++) {
      newPasswordArray.splice(Math.floor((Math.random() * (length - 2)) + 2), 1, numbers[Math.floor(Math.random() * 9)]);
    }
  }

  //Same functionality as above except index 3 is guaranteed to be a special character, indexes 4+ randomly change into special characters
  if (special) {
    newPasswordArray.splice(3, 1, specials[Math.floor(Math.random() * (specials.length - 1))]);
    for (i=0; i < Math.floor(Math.random() * length); i++) {
      newPasswordArray.splice(Math.floor((Math.random() * (length - 3)) + 3), 1, specials[Math.floor(Math.random() * (specials.length - 1))]);
    }
  }


  //Fisher-Yates shuffle to move the indexes that are guaranteed to be a certain character type to a random index in the new password array
  let arrayIndex = newPasswordArray.length;

  while (arrayIndex != 0) {
    let randomIndex = Math.floor(Math.random() * arrayIndex);
    arrayIndex--;
    [newPasswordArray[arrayIndex], newPasswordArray[randomIndex]] = [newPasswordArray[randomIndex], newPasswordArray[arrayIndex]];
  }

  //Makes our Password a string without commas
  let password = newPasswordArray.join("");
  return(password);
}
