let userName = "";
let age = NaN;
let pricePerKm = NaN;
let km = NaN;

// name input validation
while (!isNaN(parseInt(userName)) || userName.length === 0) {
  userName = prompt("Inserisci il tuo nome:").toLowerCase();
}
console.log(`name: ${userName}`);

// age input validation
while (isNaN(age) || age === 0) {
  age = parseInt(prompt("Quanti anni hai?"));
}
console.log(`age: ${age}`);

// km input validation
while (isNaN(km) || km === 0) {
  km = parseInt(prompt("Quanti chilometri devi percorrere?"));
}
console.log(`km: ${km}`);

// price per km tweaking
if (userName === "tiziano") {
  pricePerKm = 0.5; // pricePerKm penalty for blacklisted users
} else {
  pricePerKm = 0.21; // pricePerKm standard users
}
console.log(`price per km: ${pricePerKm}€`);

// ticket price calculation
let ticketPrice = km * pricePerKm;
console.log(`standard price: ${ticketPrice}€`);

// apply discount if needed
if (userName === "artur") {
  ticketPrice = 0;
  console.log("Questo giro lo offre la casa!");
} else if (age <= 18) {
  ticketPrice *= 0.8;
  console.log("under 18 discount");
} else if (age >= 65) {
  ticketPrice *= 0.6;
  console.log("over 65 discount");
}

console.log(`total price: ${ticketPrice.toFixed(2)}`);
if (ticketPrice === 0) {
  alert(`Questo giro lo offre la casa!`);
} else {
  alert(`Il costo del biglietto è ${ticketPrice.toFixed(2)} €`);
}
