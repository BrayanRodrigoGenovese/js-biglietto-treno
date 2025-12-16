const km = prompt("Quanti chilometri devi percorrere?");
console.log(km);
const age = prompt("Quanti anni hai?");
console.log(age);
const price = 0.21;
console.log(price);

let ticketPrice = km * price;
console.log(`standard price = ${price}€`);
if (age <= 18) {
  ticketPrice *= 0.8;
  console.log("<=18 discount");
} else if (age >= 65) {
  ticketPrice *= 0.6;
  console.log(">=65 discount");
}

console.log(ticketPrice);
alert(`il costo del biglietto è ${ticketPrice.toFixed(2)} €`);
