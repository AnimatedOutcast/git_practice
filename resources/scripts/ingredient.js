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
//cost calculator:
function calculateCost() {
    let costPerUnit;
    switch (document.body.querySelector('#unitSelect').value) {
        case "ounce":
            costPerUnit = (ingredient.ingCost / ingredient.netWeight) * document.body.querySelector('#amount').value;
            break;
        case "gram":
            costPerUnit = ((ingredient.ingCost / (ingredient.netWeight * 28.34952)) * document.body.querySelector('#amount').value);
            break;
        default:
            break;
    }
    alert(`${document.body.querySelector('#amount').value} ${document.body.querySelector('#unitSelect').value}(s) of ${ingredient.ingName} costs ${costPerUnit.toFixed(2)}`);
}
//button: