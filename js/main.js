let km = NaN;
while (Number.isNaN(km)) {
  km = parseInt(prompt("Quanti chilometri devi percorrere?"));
}
console.log(km);

let age = NaN;
while (Number.isNaN(age)) {
  age = parseInt(prompt("Quanti anni hai?"));
}
console.log(age);

const pricePerKm = 0.21;
console.log(pricePerKm);

let ticketPrice = km * pricePerKm;
console.log(`standard price = ${ticketPrice}€`);
if (age <= 18) {
  ticketPrice *= 0.8;
  console.log("<=18 discount");
} else if (age >= 65) {
  ticketPrice *= 0.6;
  console.log(">=65 discount");
}

console.log(ticketPrice);
alert(`il costo del biglietto è ${ticketPrice.toFixed(2)} €`);
