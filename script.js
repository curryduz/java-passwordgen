// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function arrayFromLowToHight(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array 
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);