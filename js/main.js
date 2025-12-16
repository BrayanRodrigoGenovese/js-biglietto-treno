let userName = NaN;

while (!isNaN(parseInt(userName))) {
  userName = prompt("Inserisci il tuo nome:");
}
userName.toLowerCase();
console.log(userName);

let km = NaN;
while (isNaN(km)) {
  km = parseInt(prompt("Quanti chilometri devi percorrere?"));
}
console.log(km);

let age = NaN;
while (isNaN(age)) {
  age = parseInt(prompt("Quanti anni hai?"));
}
console.log(age);

let pricePerKm = NaN;
if (userName == "tiziano") {
  pricePerKm = 0.5;
} else {
  pricePerKm = 0.21;
}
console.log(`prezzo per km = ${pricePerKm}€`);

let ticketPrice = km * pricePerKm;
console.log(`standard price = ${ticketPrice}€`);

if (userName == "artur") {
  ticketPrice = 0;
  console.log("Questo giro lo offre la casa!");
} else if (age <= 18) {
  ticketPrice *= 0.8;
  console.log("<=18 discount");
} else if (age >= 65) {
  ticketPrice *= 0.6;
  console.log(">=65 discount");
}

console.log(ticketPrice.toFixed(2));
if (ticketPrice == 0) {
  alert(`Per te il biglietto è gratuito`);
} else {
  alert(`Il costo del biglietto è ${ticketPrice.toFixed(2)} €`);
}
