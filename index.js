// initialize count as 0 
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1;
    countEl.textContent = count;
}

//1. Create a function, save() which logs out the count when it's called
//2. Create a variable that contains bot the count and the dash seperator, i.e. "12 - "
//3. Render the variable in the saveEl using innerText
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on Subsway!")