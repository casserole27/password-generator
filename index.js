//CHARACTER ARRAYS
const charGroup = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numGroup =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symGroup = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

//TEXT INPUT FIELDS
const resultOne = document.getElementById("result-one");
const resultTwo = document.getElementById("result-two");

//RANGE INPUT FIELD
const inputRange = document.getElementById("pw-length"); // RANGE
const pwLengthResult = document.getElementById("length-result"); // RANGE TEXT

//CHECKBOX FIELDS
const inclNumbers = document.getElementById("numbers");
const inclSymbols = document.getElementById("symbols");

//BUTTONS
let generateBtn = document.getElementById("generate");
let copyPwOne = document.getElementById("copy-one");
let copyPwTwo = document.getElementById("copy-two");

// LISTEN FOR RANGE INPUT FOR PASSWORD LENGTH
inputRange.addEventListener("input", function() {
  pwLengthResult.textContent = inputRange.value;
});


//??? I got an accessibility error check that not all of my inputs are able to be activated by a keyboard (specifically the range)
//??? What do you do besides "click" on an event listener to make sure the keyboard can be used as well?

// CLICK GENERATE PASSWORD BUTTON 
generateBtn.addEventListener("click", function() {
 
  resultOne.value = "";
  resultTwo.value = "";

  let pw = charGroup;
 
  //??? .concat(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  //??? Is this the best way?

  if (inclNumbers.checked) {
    //! if numbers checkbox is checked, .concat() combines pw/char array with number checkbox
    pw = pw.concat(numGroup); 
  };

  if (inclSymbols.checked) {
    //! if symbols checkbox is checked, .concat() combines pw/char array with symbol checkbox
    pw = pw.concat(symGroup) 
  };

  //!iterate based on length of input range selection
  for (let i = 0; i < inputRange.value; i++) {

    let randomCharOne = Math.floor(Math.random() * pw.length);
    console.log(randomCharOne)
    let randomCharTwo = Math.floor(Math.random() * pw.length);
    resultOne.value += pw[randomCharOne];

    //!assigns value to text input field
    //! += adds a random value based on input selections every iteration / length of range
    
    resultTwo.value += pw[randomCharTwo];

  };

});

// COPY PASSWORDS TO CLIPBOARD
copyPwOne.addEventListener("click", function() {
  let copyText = resultOne;
  //! .select() method selects text from an input field
  copyText.select();
  //! writes to system clipboard
  //??? site permissions to use clipboard? Is this secure? https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
  navigator.clipboard.writeText(copyText.value);

  //! create a div and add it to the document
  const alert = document.createElement("div");
  //! add the alert class and text
  alert.classList.add("alert");
  alert.textContent = "Copied to clipboard";
   //! add alert element to the body as child node 
  document.body.appendChild(alert);
  
  setTimeout(function() {
    //! remove the alert from the document after 1000ms
      document.body.removeChild(alert);
  }, 1000);
  return resultOne;
});

copyPwTwo.addEventListener("click", function() {
  let copyText = resultTwo;
  copyText.select();
  navigator.clipboard.writeText(copyText.value);

  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.textContent = "Copied to clipboard";
  document.body.appendChild(alert);
   
  setTimeout(function() {
    document.body.removeChild(alert);
  }, 1000);
  return resultTwo;
});


//! ORIGINAL CODE I WROTE WITH P INSTEAD OF INPUT
//* INPUTS ARE BEST PRACTICE

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

/******* MAIN IDEA ******/
//! GENERATE RANDOM NUMBER BASED ON LENGTH OF CHARACTERS ARRAY LENGTH
//! += CHARACTER WITH RANDOM INDEX