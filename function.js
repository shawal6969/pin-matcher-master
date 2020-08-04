//declearing variables

let output; //this variable is used in mouse event section

let convertInput; //this variable is used in mouse event section

let compareRandom;


//generating random number
function generateRandom() {
    let randomNumber = Math.floor(Math.random () * (9999 - 1000) + 1000);  
    return randomNumber;
}

document.getElementById("number-generator-button").addEventListener("click", function(){
 compareRandom = document.getElementById("generator-display").value = generateRandom();
})



//mouse event making the dialpad clickable
let mouseEv = document.getElementsByClassName("button");
for (let index = 0; index < mouseEv.length; index++) {
    mouseEv[index].addEventListener("click", function(){
      output = document.getElementById("user-input");
      let assignValue = output.value += mouseEv[index].innerHTML;
       convertInput = Number(assignValue);
    })  
}

//submit function when submit button is clicked then the below function will be executed
let userDisplay;
function submitBtn() {
    userDisplay = document.getElementById("user-input").value;
    convertInput = Number(userDisplay);
    if (compareRandom === convertInput) {
        return document.getElementById("success").style.display = "block";
        //console.log("s");
    } else {
        let fail = document.getElementById("fail").style.display = "block";
        document.getElementById("submit").disabled  = true;
        // document.getElementById("try-left").innerHTML = sbValue--;
        return fail;
    }   
}

document.getElementById("submit").addEventListener("click", function(){
    submitBtn();
    
});

//making the c button functionable
document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("user-input").value = "";
})

//making the backspace button functionable
document.getElementById("back-space").addEventListener("click", function(){
    let captured = document.getElementById("user-input").value.slice(0, -1);
    document.getElementById("user-input").value = captured;
})



