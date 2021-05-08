// Assignment Code

//max and min password length
var minLength = 8;
var maxLength = 128;
var lengthGuide = " ("+ minLength +" <= password <= " + maxLength +")";

//Special chars arrays
var specialCharsArray = "!@%+/\'#$^?:,(){}[]~`-_.".split("");

//Number arrays
var numberArray = "1234567890".split("");

//Lower cass array
var lowerCassArray = "abcdefghijklmnopqrstuvwxyz".split("");

//Upper case array
var upperCassArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//function to prompt user for pass options.
function getPassword(){
  //Variable to store length of password.
  var length = parseInt(prompt("How many characters would you like in your password?" + lengthGuide));
  
  //Conditional input filter for length.
  var goodLength = false;
  while (!goodLength){
    if(isNaN(length))
    {
      alert("Input must be a number");
      length = parseInt(prompt("How many characters would you like in your password?" + lengthGuide));
    }
    else if(length < minLength){
      alert("Password length must be at least " + minLength + " characters");
      length = parseInt(prompt("How many characters would you like in your password?" + lengthGuide));
    }
    else if(length > maxLength)
    {
      alert("Password length cannot be larger than " + maxLength +" characters");
      length = parseInt(prompt("How many characters would you like in your password?" + lengthGuide));
    }
    else{
      goodLength = true;
    }
  }

  //Asks user for types of characters to use and forces them to pick atleast one.
  var goodChoice = false;
  while(!goodChoice){
    var specialChars = confirm("Do you want special characters?");
    var numbers = confirm("Do you want numbers?");
    var upper = confirm("Do you want uppercase letters?");
    var lower = confirm("Do you want lowercase letters?");

    if(((!specialChars)&&(!numbers)&&(!upper)&&(!lower)))
    {
      alert("Please choose atleast one type of character");
      goodChoice = false;
    }
    else{
      goodChoice = true;
    }
  }

  //Use an object to track user inputs.
  var possiblePass = {
    length: length,
    specialChars: specialChars,
    numbers: numbers,
    upper: upper,
    lower: lower
  }

  return possiblePass;
}

//Gets a random element from a given array.
function getRandomLetters(arr) {
  var random = Math.floor(Math.random() * arr.length);//some kind of math problem arr.length
  return arr[random];
}

//Generates a password with user inputs.
function generatePassword(){
  //Call myPassword() and stores the result (an object with user inputs).
  var options = getPassword();

  //Variable to store the final password.
  var passResult = [];

  //Variable to store the types of characters to use.
  var possibleChars = [];

  //Variable to store a guaranteed character of each chosen type.
  var guarChars = [];


  //Conditions to check each type of characters the user wants
  //If the user wants a type of character, we add those characters to the
  //possibleChars array and one of those characters to the guarChars array.
  if(options.specialChars){
    possibleChars = possibleChars.concat(specialCharsArray);
    guarChars.push(getRandomLetters(specialCharsArray));
  }
  if(options.numbers){
    possibleChars = possibleChars.concat(numberArray);
    guarChars.push(getRandomLetters(numberArray));
  }
  if(options.upper){
    possibleChars = possibleChars.concat(upperCassArray);
    guarChars.push(getRandomLetters(upperCassArray));
  }
  if(options.lower){
    possibleChars = possibleChars.concat(lowerCassArray);
    guarChars.push(getRandomLetters(lowerCassArray));
  }

  possibleChars = possibleChars.join("");

  //Iterates over the password length from the options object.
  //Adds random characters from possibleChars to possiblePass.
  for(var i = 0; i <options.length; i++) {
    var possiblePass = getRandomLetters(possibleChars);
    passResult.push(possiblePass);
  }

  //loop over guarChars and insert each character into passResult, 
  //to guarantee atleast one of each chosen character.
  //usedIndex is used to prevent overriding a previous invertion.
  usedIndex = [];
  for(var i = 0; i < guarChars.length; i++) {
    var randIndex = Math.floor(Math.random() * passResult.length);
    while(usedIndex.includes(randIndex))
    {
      randIndex = Math.floor(Math.random() * passResult.length);
    }
    passResult[randIndex] = guarChars[i];
    usedIndex.push(randIndex);
  }
  return passResult.join("");
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
