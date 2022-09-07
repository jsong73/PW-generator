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

  

  // shows whatever user inputs into PROMPT text box in console
function generatePassword(){
     var userInput= window.prompt("How many characters would you like your password to contain?");
     console.log(userInput); //this is a string

     // Variable to store length of pw from user input
     //parse TO an integer
     //parseInt will CONVERT or PARSE the STRING into an INTEGER
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

  var passwordOptionList = [];


  if(userWantsNumbers === true) {
    // we concatenate (join) the values from the numberList to the passwordOptionList and CREATE a new Array.
    newArray = passwordOptionList.concat(numberList)
  } 
  if(userWantsSymbols === true) {
    // we concatenate (join) the values from the symboLList to the passwordOptionList and CREATE a new Array.
    newArray =  newArray.concat(symbolList)  
  } 
  if(userWantsLowercase === true) {
    newArray = newArray.concat(lowercaseList)  
  }
  if(userWantsUppercase === true) {
    newArray = newArray.concat(uppercaseList)  
  }
  
  console.log(newArray);

}

function getRandom(newArray){
  var randomInt = math.floor(math.random()* newArray.length);

}

console.log(getRandom(newArray));




    //whatever LOGIC we write in this for loop
    //will run the NUMBER of times that the user asks for. (how long the password length will be)
    // How do we GRAB THE VALUES that the user specified and RANDOMLY scramble them
    // Now that the newArray contains all the OPTIONS that user wants in a password, how can I RANDOMIZE those values and put them into a new string or array?
    // And then get it to display to the page?   
