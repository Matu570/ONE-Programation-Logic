/* 
1 tanque tiene 40L y se recorre 480Km
¿Cuantos kilometros se recorre por litro?
*/
let tankCapacity=40;
let kmGasolineTank=480;
let kmAlcoholTank=300;
let efficiency=kmGasolineTank/tankCapacity;
document.write(`<p>Problem: If with ${tankCapacity} liters of gasoline I travel ${kmGasolineTank}km... How much can I travel with each liter? <br> I can go ${efficiency}km.<p>`);
efficiency=kmAlcoholTank/tankCapacity;
document.write(`<p>Problem: If with ${tankCapacity} liters of alcohol I travel ${kmAlcoholTank}km... How much can I travel with each liter? <br> I can go ${efficiency}km.<p>`);