const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwOne = "";
let pwTwo = "";

let pwElOne = document.getElementById("pw-one");
let pwElTwo = document.getElementById("pw-two");

let btn = document.getElementById("generate-btn");

btn.addEventListener("click", function() {
    
    pwElOne.textContent = pwOne = "";
    pwElTwo.textContent  = pwTwo = "";

  for (let i = 0; i < 16; i++){

        let charOne = Math.floor(Math.random() * characters.length);

        pwElOne.textContent = pwOne += characters[charOne];
        
        let charTwo = Math.floor(Math.random() * characters.length);
        
        pwElTwo.textContent = pwTwo += characters[charTwo];
   }  
});
