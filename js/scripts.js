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
    console.log(parseInt(userEntry.value));
    // if (isNaN(checkInt) === false){
    //     displayNum.textContent = "NaN";
    //     console.log(isNaN(checkInt));
    // }

    // else {
        // displayNum.innerHTML = checkInt;
    // }
    
}

function add(){
    base();
    total = userVal + total;
    console.log(total);
    display();

    
}

function subtract(){
    base();
    total = total - userVal;
    display();
    console.log(total);

}

function display(){
    displayNum.textContent = total;
    if (total < 0){
        console.log('hitting');
        displayNum.style.color = "#ff0000";
    }
    if (total >= 0)
    displayNum.style.color = "#000000"
}

base();