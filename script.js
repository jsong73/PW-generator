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

// array of special characters that can be used
var symbolList = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  
  // Array of numeric characters to be included in password
  var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowercaseList = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  // Array of uppercase characters to be included in password
  var uppercaseList= [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  function randomNumber(arr){
    return Math.floor(math.random()*arr.length);
  
  }
  // shows whatever user inputs into PROMPT text box in console
function generatePassword(){
     var userInput= window.prompt("How many characters would you like your password to contain?");
     console.log(userInput);

     // Variable to store length of pw from user input
     var passwordLength = parseInt(userInput)
    
    // if pw length is not a number, error will pop up and prompt will end
     if (isNaN(passwordLength)){
        window.alert("Error!")
        return;
    } 
    // conditional statement for if pw length is less than 8 OR greater than 128 characters then a ALERT box will state length requirement                              
    if (passwordLength < 8 || passwordLength > 128){
        alert("Password length must be between 8-28 characters!");
        return;
    
}

// to create ok or cancel prompt to store bollean of symbols, numbers, upper and lowercase
var userWantsNumbers = window.confirm("Click ok to include numbers in your password.")
var userWantsSymbols = window.confirm("Click ok to include symbols in your password.")
var userWantsLowercase = window.confirm("Click ok to include lowercase letters in your password.")
var userWantsUppercase = window.confirm("Click ok to include uppercase letters in your password.")

var passwordOptionList = []


if(userWantsNumbers === true) {
    passwordOptionList.push(numberList)  
}
if(userWantsSymbols === true) {
    passwordOptionList.push(symbolList)  
}
if(userWantsLowercase === true) {
    passwordOptionList.push(lowercaseList)  
}
if(userWantsUppercase === true) {
    passwordOptionList.push(uppercaseList)  
}

console.log(passwordOptionList)

var generatedPassword =  ""
}

for (var i = 0;  i < passwordLength; i++) {
  var randomItem = passwordOptionList[randomNumber(0, passwordOptionList.length)];



} 