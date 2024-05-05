'use strict'
//sample ingredient info
var ingredient = {
    ingName: "flour",
    ingCost: 3.49,
    netWeight: 160.0,
    netWeightUnit: "ounce",
    totalServings: 151,
    servingSize: 0.25,
    servingUnit: "cup",
    caloriesPerServing: 110
};
//ingredient card info:
document.body.querySelector('#ingName').textContent = ingredient.ingName;
document.body.querySelector('#ingCost').textContent = ingredient.ingCost;
if (ingredient.netWeight > 1) {
    document.body.querySelector('#netWeight').textContent = ingredient.netWeight + " " + ingredient.netWeightUnit + "s";
} else {
    document.body.querySelector('#netWeight').textContent = ingredient.netWeight + " " + ingredient.netWeightUnit;
}
document.body.querySelector('#totalServings').textContent = ingredient.totalServings;
if (ingredient.servingSize > 1) {
    document.body.querySelector('#servingSize').textContent = ingredient.servingSize + " " + ingredient.servingUnit + "s";
} else {
    document.body.querySelector('#servingSize').textContent = ingredient.servingSize + " " + ingredient.servingUnit;
}
document.body.querySelector("#caloriesPerServing").textContent = ingredient.caloriesPerServing;
//cup, Tbsp, tsp:
let netCups;
let netTbsp;
let netTsp;
switch (ingredient.servingUnit) {
    case "cup":
        netCups = ingredient.totalServings * ingredient.servingSize;
        netTbsp = netCups * 16;
        netTsp = netCups * 48;
        console.log(`${netCups} cups, ${netTbsp} tablespoons, ${netTsp} teaspoons.`)
        break;
    default:
        break;
}
//cost calculator:
function calculateCost() {
    let costPerUnit;
    const amount = document.body.querySelector('#amount').value;
    switch (document.body.querySelector('#unitSelect').value) {
        case "ounce":
            costPerUnit = (ingredient.ingCost / ingredient.netWeight) * amount;
            break;
        case "gram":
            costPerUnit = (ingredient.ingCost / (ingredient.netWeight * 28.34952)) * amount;
            break;
        case "cup":
            costPerUnit = (ingredient.ingCost / netCups) * amount;
            break;
        case "tbsp":
            break;
        case "tsp":
            break;
        default:
            break;
    }
    let msg = `${document.body.querySelector('#amount').value} ${document.body.querySelector('#unitSelect').value}(s) of ${ingredient.ingName} costs ${costPerUnit.toFixed(2)}`;
    document.body.querySelector('#result').textContent = msg;
}
//button: