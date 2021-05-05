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


  //need to create a conditional statement to check if user included atleast one of the char types. return user back to start of application.

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
