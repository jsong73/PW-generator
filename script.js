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

// displays whatever user inputs in the prompt text box in the console
  function generatePassword(){
    var userInput= prompt("how many characters would you like your password to contain?");
    console.log(userInput); //this is a string

    // var passwordLength will store length of pw that user iput
    // parses a STRING and returns on INTEGER
    var passwordLength = parseInt(userInput);

    // if the pw length the user inputs is not NOT A NUMBER, an error alert window will pop up and prompt will end
    if (isNaN(passwordLength)){
        window.alert("ERROR!");
        return;

    }
    // if password length is less than 8 OR greater than 128 numbers than alert box will state length requirement
    if (passwordLength < 8 || passwordLength> 127){
        alert("Password length must be between 8-128 characters!");
        return;
    }

    // creates ok or cancel confirm box to store boolean of symbols, numbers, upper and lowercase
    var userWantsNumbers = confirm("Click ok to include numbers in your password.");
    var userWantsSymbols = confirm("Click ok to include symbols in your password.");
    var userWantsLowercase = confirm("Click ok to include lowercase in your password.");
    var userWantsUppercase = confirm("Click ok to include uppercase in your password.");

    var userChoiceArray = [];

    // if the boolean userWantsNumbers is true, we will concatenate(JOIN) the values from the numberList and userChoiceArray and CREATE a new array
    if(userWantsNumbers === true){
        userChoiceArray = userChoiceArray.concat(numberList)
    }
    // if the boolean userWantsSymbols is true, we will concatenate(JOIN) the values from the symbolList and userChoiceArray and CREATE a new array
    if(userWantsSymbols === true){
        userChoiceArray = userChoiceArray.concat(symbolList)
    }
    // if the boolean userWantsLowercase is true, we will concatenate(JOIN) the values from the lowercaseList and userChoiceArray and CREATE a new array
    if(userWantsLowercase === true){
        userChoiceArray = userChoiceArray.concat(lowercaseList)
    }
 
    // if the boolean userWantsUpperCase is true, we will concatenate(JOIN) the values from the uppercaseList and userChoiceArray and CREATE a new array
    if(userWantsUppercase === true){
        userChoiceArray = userChoiceArray.concat(uppercaseList)
    }
    
    // Will return a random integer/number from the input array
    function getRandom(inputArray){
        var randomInt = Math.floor(Math.random()* inputArray.length);
        return randomInt;
   
    }
  
    var results = [];

    // Will generate a random array from userChoiceArray and choose a random index up to passwordLength and will PUSH/add a new item to the end of the array
    for (var i = 0; i < passwordLength; i++){
    var randomIndex = getRandom(userChoiceArray);
    console.log(userChoiceArray[randomIndex]);
    results.push(userChoiceArray[randomIndex]);
    }
    // will JOIN/create a new string with the results and show in console
    console.log(results.join(''));
    return results.join(''); 
    //the ' ' will remove the commas in the array and have the variables listed as one with no seperation

  }
