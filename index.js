const charactersGroup = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbersGroup =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolsGroup = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

//TEXT INPUT FIELDS
const resultOne = document.getElementById("result-one");
const resultTwo = document.getElementById("result-two");

//RANGE INPUT FIELD
const pwLength = document.getElementById("length");
const pwLengthResult = document.getElementById("length-result");

//CHECKBOX FIELDS
const inclNumbers = document.getElementById("numbers");
const inclSymbols = document.getElementById("symbols");

//BUTTONS
let generateBtn = document.getElementById("generate");
let copyPwOne = document.getElementById("copy-one");
let copyPwTwo = document.getElementById("copy-two");

//!GENERATE RANDOM CHARACTERS

let pwOne = "";
let pwTwo = "";

//! LISTEN FOR PASSWORD RANGE CHANGE
pwLength.addEventListener("change", function(e) {
  pwLengthResult.textContent = e.target.value;
})

generateBtn.addEventListener("click", function() {
    
    resultOne.value = pwOne = "";
    resultTwo.value  = pwTwo = "";

    const length = pwLength.value;
    const numbers = inclNumbers.checked;
    const symbols = inclSymbols.checked;
        //! use .value when it is an input field, instead of .textContent
    resultOne.value = generatePasswordOne(numbers, symbols, length)
    resultTwo.value = generatePasswordTwo(numbers, symbols, length)

  });  

  function generatePasswordOne(number, symbol, length) {
   
    let variationsCount = [number, symbol].length;
  
    for (let i = 0; i < length; i += variationsCount){
      if (number) {
        let num = Math.floor(Math.random() * numbersGroup.length)
        pwOne += numbersGroup[num];
      }
      if (symbol) {
        let sym = Math.floor(Math.random() * symbolsGroup.length)
        pwOne += symbolsGroup[sym];
      }
      let char = Math.floor(Math.random() * charactersGroup.length)
      pwOne += charactersGroup[char];

      // const finalPasswordOne = pwOne.slice(0, length);

      return pwOne
   }  
};

function generatePasswordTwo(number, symbol, length) {

  let variationsCount = [number, symbol].length;

  for (let i = 0; i < length; i += variationsCount){
    if (number) {
      let num = Math.floor(Math.random() * numbers.length)
      pwTwo += numbers[num];
    }
    if (symbol) {
      let sym = Math.floor(Math.random() * symbols.length)
      pwTwo += symbols[sym];
    }
    let char = Math.floor(Math.random() * characters.length)
    pwTwo += characters[char];

    // const finalPasswordOne = pwOne.slice(0, length);

    return pwTwo;
   }  
};





//! OG CODE WITH P INSTEAD OF INPUT

// let pwElOne = document.getElementById("pw-one");
// let pwElTwo = document.getElementById("pw-two");

/*
generateBtn.addEventListener("click", function() {
    
    resultOne.textContent = pwOne = "";
    resultTwo.textContent  = pwTwo = "";

        for (let i = 0; i < 16; i++){

        let charOne = Math.floor(Math.random() * characters.length);


        //! use .value when it is an input field, instead of .textContent
        resultOne.value = pwOne += characters[charOne];
        
        let charTwo = Math.floor(Math.random() * characters.length);
        
        resultTwo.value = pwTwo += characters[charTwo];
   }  
});
*/