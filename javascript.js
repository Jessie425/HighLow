let targetNum;

// Math.floor generates a random number within 0 to 0.9999999 
// (not 1) and may be set within a given range

targetNum = Math.floor((Math.random()*100)+1);
console.log(targetNum);


let resultDisplay = document.getElementById('result');

function checkResult(){
   let guess = parseInt(document.getElementById('number').value); 
   if(guess < targetNum){
       console.log("Too Low");
       resultDisplay.innerHTML = "Too Low";
       resultDisplay.style.color = "red";
   }
   else if (guess > targetNum){
       console.log("Too High");
       resultDisplay.innerHTML = "Too High";
       resultDisplay.style.color = "blue";
   }
   else if(guess === targetNum){
       console.log("You got it!");
       resultDisplay.innerHTML = "You Got It";
       resultDisplay.style.color = "Green";
   }
   else {
       resultDisplay.innerHTML = "This isn't a Number!";
       resultDisplay.style.color = "purple";
   }
}