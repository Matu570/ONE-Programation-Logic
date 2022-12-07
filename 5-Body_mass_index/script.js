function breakLine() {
    document.write("<br><br><br>");
}

function printPhrase(phrase) {
    document.write(phrase + "<br>");
}

function calculateBMI(height, weight) {
    return Math.floor(weight/Math.pow(height, 2));
};

let namePatient=prompt("Hello! What is your name?")
let weight=Number(prompt(`${namePatient} what is your weight?`));
let height=Number(prompt(`What is your height?`));
let bMICalculated=calculateBMI(height, weight);
printPhrase("The body mass index calculated is: " + bMICalculated);
