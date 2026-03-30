const API_URL = "https://script.google.com/macros/s/AKfycbyLLXkRJmJ6PIq5mDb45ho76vhc6ZGIInDpEzYbxYhgxMfypnSIAMCBtNKTS7HYJ1A2/exec";

let guests = [];

async function loadGuests() {

const response = await fetch(API_URL);

guests = await response.json();

console.log("Guests loaded:", guests);

}
function checkGuest(){

let nameInput = document
.getElementById("guestName")
.value
.trim()
.toLowerCase();

let guest = guests.find(
g => g.name.toLowerCase() === nameInput
);

if(guest){

console.log("Guest found:", guest);

}
else{

console.log("Guest not found");

}

}
loadGuests();
guests.forEach(g => {
  if (!g.access || g.access === "blank") {
    g.access = "Regular";
  }
});

let currentGuest = null;

function checkGuest(){

let nameInput = document.getElementById("guestName").value.trim().toLowerCase();

let guest = guests.find(g => g.name.toLowerCase() === nameInput);

if(guest){

currentGuest = guest;

document.getElementById("inputCard").classList.add("hidden");
document.getElementById("resultCard").classList.remove("hidden");

document.getElementById("welcomeText").innerText = "Welcome, " + guest.name + "!";

document.getElementById("tableN").innerText = guest.table;

document.getElementById("access").innerText = guest.access;

}
else{

document.getElementById("error").innerText = "Sorry, you are not on the guest list.";

}

}

function showTableGuests(){

let list = document.getElementById("tableGuests");
let button = document.getElementById("viewGuestsBtn");

list.innerHTML = "";

let sameTable = guests.filter(g => g.table === currentGuest.table);

sameTable.forEach(g => {

let li = document.createElement("li");
li.innerText = g.name ;
list.appendChild(li);

});

list.classList.toggle("hidden");
button.classList.toggle("active");

}

function goBack(){

document.getElementById("resultCard").classList.add("hidden");
document.getElementById("inputCard").classList.remove("hidden");

document.getElementById("guestName").value="";
document.getElementById("tableGuests").classList.add("hidden");

}
