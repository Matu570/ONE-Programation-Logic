let year=2022;
let edadPaola=19;
let edadXimena=12;
let edadAna=27;
let name1="Paola";
let name2="Ximena";
let name3="Ana";
let promedio=Math.round((edadPaola+edadXimena+edadAna)/3);

function print(elementToPrint){
    document.write(elementToPrint);
    document.write("<br><br><br>");
};

alert("Christian has 30 years old");
document.write("<h1>How old are you?</h1>");
document.write("<h2>How old are they?</h2>");

print("Juan was born in 2000. " + "He has "+(year-2000) + " years old.");

print("Pedro was born in 1990. " + "He has "+(year-1990) + " years old.");

print("Esteban was born in 1970. " + "He has "+(year-1970) + " years old.");

print("Paola was born in 2003. " + "She has "+ edadPaola + " years old.");

print("Ximena was born in 2010. " + "She has "+ edadXimena + " years old.");

print("Ana was born in 1995. " + "She has "+ edadAna + " years old.");

print("The average age of " +name1+", "+name2+" y "+name3+ " is " + promedio + ".");

