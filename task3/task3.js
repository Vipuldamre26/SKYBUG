const userInput = document.getElementById("userInput");
var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}


// eval() is a bulit-in function that evaluate the value in it,
// for ex : eval(2 * 5) = output = 10
function equal(){
    userInput.value = eval(expression);
    expression = '';
}

function erase(){
    expression = '';
    userInput.value = expression;
}