//Attemping to add reactive number.
let randumNum = Math.floor(Math.random() * (26 - 12) + 12) /* So here, we use this to get a random numbre.. kind of saw this online but works. */
let joem = document.getElementById('testing');
joem.textContent = `Your number is: ${randumNum}`;
let firstBox = document.getElementById("box1");
let secondBox = document.getElementById("box2");
let thirdBox = document.getElementById("box3");
let fourthBox = document.getElementById("box4");
let fifthBox = document.getElementById("box5");
let sixthBox = document.getElementById("box6");
let seventhBox = document.getElementById("box7");
let eighthBox = document.getElementById("box8");
let ninthBox = document.getElementById("box9");
firstBox.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
secondBox.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
thirdBox.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
fourthBox.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
fifthBox.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
sixthBox.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
seventhBox.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
eighthBox.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
ninthBox.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
//create array maybe to organize this code (and practice)?
