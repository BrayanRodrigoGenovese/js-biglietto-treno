const km = prompt("Quanti chilometri devi percorrere?");
const age = prompt("Quanti anni hai?");
const price = 0.21;

let ticketPrice = km * price;
if (age <= 18) {
  ticketPrice *= 0.8;
} else if (age >= 65) {
  ticketPrice *= 0.6;
}

console.log(ticketPrice);
