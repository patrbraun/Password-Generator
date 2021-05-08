// Assignment Code

//special chars arrays
var specialCharsArray = "!@%+/\'#$^?:,(){}[]~`-_.".split("");

//number arrays
var numberArray = "1234567890".split("");

//lower cass array
var lowerCassArray = "abcdefghijklmnopqrstuvwxyz".split("");

//Upper case array
var upperCassArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

//function to prompt user for pass options
function getPassword(){
  //create a varriable to store length of password
  var length = parseInt(prompt("How many characters would you like the password to be?"));
  //conditional input filter
  var goodLength = false;
  while (!goodLength){
    if(isNaN(length))
    {
      alert("Input must be a number");
      length = parseInt(prompt("How many characters would you like the password to be?"));
    }
    else if(length < 8){
      alert("Password length must be at least 8 characters");
      length = parseInt(prompt("How many characters would you like the password to be?"));
    }
    else if(length > 128)
    {
      alert("Password length cannot be larger than 128 characters");
      length = parseInt(prompt("How many characters would you like the password to be?"));
    }
    else{
      goodLength = true;
    }
  }

  var goodChoice = false;
  while(!goodChoice){
    var specialChars = confirm("Do you want special characters?");
    var numbers = confirm("Do you want numbers?");
    var upper = confirm("Do you want uppercase letters?");
    var lower = confirm("Do you want lowercase letters?");

    if(((!specialChars)&&(!numbers)&&(!upper)&&(!lower)))
    {
      console.log("None selected");
      alert("Please choose atleast one type of character");
      goodChoice = false;
    }
    else{
      console.log("Some selected");
      goodChoice = true;
    }
  }

  //Create an object to store the unser inputs
  var possiblePass = {
    //we need to store length and all characters selected by user
    length: length,
    specialChars: specialChars,
    numbers: numbers,
    upper: upper,
    lower: lower
  }

  return possiblePass;
}

//create a function for getting a random element from an array
function getRandomLetters(arr) {
  var random = Math.floor(Math.random() * arr.length);//some kind of math problem arr.length
  return arr[random];
}

//Create a function to generate the password with the user inputs
function generatePassword(){
  //set a variable to call my getPassword function
  var options = getPassword();

  //variable to store the password as it is being concatenated
  var passResult = [];

  //create a variable to store the types of characters to include into the password
  var possibleChars = [];

  //create a variable to store each type of guarenteed characters
  var guarChars = [];


  //write a condition that adds the array for special characters into the array of possible characters based on the user inputs
  //then push the new random characters into guarenteed characters. Two methods to look up here are push and concat.
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

  //Create a for loop to iterate over the password length from the options object
  for(var i = 0; i <options.length; i++) {
    var possiblePass = getRandomLetters(possibleChars);
    passResult.push(possiblePass);
  }

  //loop over guarChars and insert each character into passResult, to guarantee atleast one of each chosen character.
  console.log(passResult);
  console.log(guarChars);
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
