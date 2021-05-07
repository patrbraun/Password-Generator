// Assignment Code

//special chars arrays
var specialChars = [];

//number arrays
var numberArray = [];

//lower cass array
var lowerCassArray = ["abcdefghijklmnopqrstuvwxyz"].split();

//Upper case array
var upperCassArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"].split();

//function to prompt user for pass options
function getPassword(){
  //create a varriable to store length of password
  var length = parseInt(
    prompt("How many characters would you like the password to be?")
  )
  //conditional input filter
  if (number.isNaN(length)){
    alert("password must be a number");
    return null; 
  }
  //conditional statement to check is pass len is atleast 8
  if(length < 8){
    alert("Password length must be at least 8 characters")
    return null;
  }
  //conditional statement to check if pass len is >= 128
  if(length > 128){
    alert("Password length cannot be larger than 128 characters")
    return null;
  }

  //create configuration prompt for the type of characters the user wants to use in password.
  //TODO

  //need to create a conditional statement to check if user included atleast one of the char types. return user back to start of application.
  //TODO

  //Create an object to store the unser inputs
  var possiblePass = {
    //we need to store length and all characters selected by user
    length: lenght,
    specialChars: specialChars,
  }

  return possiblePass
}

//create a function for getting a random element from an array
function getRandomLetters(arr) {
  var random = Math.floor(Math.random * arr.length);//some kind of math problem arr.length
  // save them to a variable
  var rand = arr[random];
  return rand;
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
    possibleChars = possibleChars.concat(specialChars);
    guarChars.push(getRandomLetters(specialChar))
  }

  //Create a for loop to iterate over the password length from the options object
  for(var i = 0; i <options.length; i++) {
    var possiblePass = getRandomLetters(possibleChars);

    passResult.push(possiblePass)
  }

  //loop over guarChars and insert each character into passResult, to guarantee atleast one of each chosen character.
  for(var i = 0; i <passResult.length; i++) {
      //prevent subsequent loops from overriding previous inserts
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
