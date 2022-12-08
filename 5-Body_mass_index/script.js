function breakLine() {
    document.write("<br><br><br>");
}

function printPhrase(phrase) {
    document.write(phrase + "<br>");
}

function calculateBMI(height, weight) {
    return (weight/Math.pow(height, 2)).toFixed(2);
};

let namePatient=prompt("Hello! What is your name?")
let weight=Number(prompt(`${namePatient} what is your weight?`));
let height=Number(prompt(`What is your height?`));
let bMICalculated=calculateBMI(height, weight);
printPhrase("The body mass index calculated is: " + bMICalculated);
if(bMICalculated<18.5){
    printPhrase("<h2>You are underweight.</h2>");
} else if(bMICalculated>=18.5&&bMICalculated<24.9){
    printPhrase("<h2>You have a normal weight.</h2>");
} else if(bMICalculated>24.9){
    printPhrase("<h2>You are overweight.</h2>");
}
