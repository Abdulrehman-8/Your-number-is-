//Attemping to add reactive number.
let obj1 = [
document.getElementById("box1"),
document.getElementById("box2"),
document.getElementById("box3"),
document.getElementById("box4"),
document.getElementById("box5"),
document.getElementById("box6"),
document.getElementById("box7"),
document.getElementById("box8"),
document.getElementById("box9"),
]
let randumNum = Math.floor(Math.random() * (26 - 12) + 12) /* So here, we use this to get a random numbre.. kind of saw this online but works. */
let joem = document.getElementById('testing');
joem.textContent = `Your number is: ${randumNum} + ${Math.floor(Math.random() * (26 - 12) + 12)}`;
for (objs of obj1) {
    objs.textContent = `${Math.floor(Math.random() * (11 - 2) + 2)}`
}
//create array maybe to organize this code (and practice)?
