/****** VARIABLES ******/

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


/******* FUNCTIONS ******/

function randomPassword () {
  resultOne.value = "";
  resultTwo.value = "";

  let pw = charGroup;

  if (inclNumbers.checked) {
    pw = pw.concat(numGroup); 
  };

  if (inclSymbols.checked) {
    pw = pw.concat(symGroup);
  };

  for (let i = 0; i < inputRange.value; i++) {

    let randomCharOne = Math.floor(Math.random() * pw.length);
    let randomCharTwo = Math.floor(Math.random() * pw.length);

    resultOne.value += pw[randomCharOne];
    resultTwo.value += pw[randomCharTwo];

  };
};

function copyPasswordOne () {
  let copyText = resultOne;
  copyText.select();
  navigator.clipboard.writeText(copyText.value);

  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.textContent = "Copied to clipboard";
  document.body.appendChild(alert);
  
  setTimeout(function() {
      document.body.removeChild(alert);
  }, 1000);
  return resultOne;
};

function copyPasswordTwo () {
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
};

/****** EVENT LISTENERS ******/

// CLICK GENERATE PASSWORD BUTTON 
generateBtn.addEventListener("click", randomPassword)

// COPY PASSWORDS TO CLIPBOARD
copyPwOne.addEventListener("click", copyPasswordOne);
copyPwTwo.addEventListener("click", copyPasswordTwo)


