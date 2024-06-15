//Attemping to add reactive number.
let randumNum = Math.floor(Math.random() * (24 - 5) + 5) /* So here, we use this to get a random numbre.. kind of saw this online but works. */
let joem = document.getElementById('testing');
joem.textContent = `Your number is: ${randumNum}`;