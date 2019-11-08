//cached references
var displayNum = document.getElementById("num");
var userEntry = document.getElementById("user-entry");
var buttonPlus = document.getElementById("add");
var buttonMinus = document.getElementById("subtract");

let userVal, addNum, minusNum;

var total = 0;
//event listeners
buttonPlus.addEventListener("click", add)
buttonMinus.addEventListener("click", subtract)



//functions





function base(){
    displayNum.textContent = parseInt(userEntry.value);
    userVal = parseInt(userEntry.value);

}

function add(){
    base();
    total += userVal;
    display();

    
}

function subtract(){
    base();
    total -= userVal;
    display();
}

function display(){
    displayNum.textContent = total;
    if (total < 0){
        displayNum.style.color = "#ff0000";
    }
    if (total >= 0)
    displayNum.style.color = "#000000"
}

base();