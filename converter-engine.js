
let display=document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    display.value += "/1000;"
    display.value =eval(display.value)
}
