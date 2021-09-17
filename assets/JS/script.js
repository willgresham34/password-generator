// Assignment Code   
var generateBtn = document.querySelector("#generate");


function generatePassword() {

var caseUpp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var caseLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var caseSpec = ['*', '&', '$', '#', '@', '^', '?', '`', '-', '+'];
var caseNum = [ '1' , '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var passArray = [];
var random = [];
  //prompt user for character count
var charCount = window.prompt ('How many characters do you want you password to be?');

  if (charCount < 8 || charCount > 128) {
    return 'Invalid Character Count';
  }
//prompt user for upper case
 var upperCase = window.confirm ('Do you want Upper case letters?');
 if (upperCase) {
  var passArray = passArray.concat(caseUpp); 
 }
 console.log(passArray)
//prompt user for lower case
var lowerCase = window.confirm ('Do you want Lower case letters?');
 if (lowerCase) {
  var passArray = passArray.concat(caseLow); 
 }
 console.log (passArray)
//prompt user for special char
var specChar = window.confirm ('Do you want Special Characters?');
 if (specChar) {
  var passArray = passArray.concat(caseSpec); 
 }
 console.log (passArray)
//prompt user for numbers 
var numChar = window.confirm ('Do you want Numbers?');
 if (numChar) {
  var passArray = passArray.concat(caseNum); 
 }
 console.log (passArray)

//validate information
console.log(charCount)
//generate password
  for (var i= 0; i < charCount; i++) {
    var character = [Math.floor(Math.random() * passArray.length)];
    random.push(passArray[character]);
  }
console.log(random)

//display password
  return random.join('');
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
