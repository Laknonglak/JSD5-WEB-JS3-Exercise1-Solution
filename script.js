//calculate function
//Solution 1: console.log in the function
function add (a,b){
    console.log(a+b);
}

function subtract (a,b){
    console.log(a-b);
}

function multiply (a,b){
    console.log(a*b);
}

function divide (a,b){
    console.log(a/b);
}

add(10,5);
subtract(10,5);
multiply(10,5);
divide(10,5);

//Solution2: with Return value
function addTwoNumbers (num1,num2){
    return (num1+num2);
}

function subtractTwoNumbers (num1,num2){
    return(num1-num2);
}

function multiplyTwoNumbers (num1,num2){
    return(num1*num2);
}

function divideTwoNumbers (num1,num2){
    return(num1/num2);
}

console.log('result: ' + addTwoNumbers(10,5));
console.log('result: ' + subtractTwoNumbers(10,5));
console.log('result: ' + multiplyTwoNumbers(10,5));
console.log('result: ' + divideTwoNumbers(10,5));


//inform
function informationCard(firstName,location,hobby){
    console.log("Hi, my name is " + firstName + " I live in " + location + "and enjoy "+hobby);

    //another way to get information
    console.log(`Hi my name is ${firstName} I live in ${location} and enjoy ${hobby}`);
}

informationCard("Lak","Chiangrai","Cooking");
