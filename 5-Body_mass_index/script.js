function breakLine() {
    document.write("<br><br><br>");
}

function printPhrase(phrase) {
    document.write(phrase + "<br>");
}

function calculateBMI(name, height, weight) {
    let bMI=Math.floor(weight/Math.pow(height, 2));
    breakLine();
    printPhrase(`The Body mass index of ${name} is ` + bMI);
}

calculateBMI("Matias", 1.6,60);
