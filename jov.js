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
];

const score = document.getElementById("score");
score.textContent = `Score is: ${0}`;
let lost = document.getElementById("lost");

let randomerNum = Math.floor(Math.random() * (22 - 3) + 3);

let randumNum = Math.floor(Math.random() * (22 - 3) + 3); /* So here, we use this to get a random numbre.. kind of saw this online but works. */

let joem = document.getElementById('testing');

joem.textContent = `Your number is: ${randumNum} + ${randomerNum}`;

for (objs of obj1) { //assigning values to the tiles
    objs.textContent = `${Math.floor(Math.random() * (43 - 5) + 5)}`
};

let catcher = randomerNum + randumNum; //capturing answer of addition

let int = Math.floor(Math.random() * (9 - 1) + 1);

if (obj1[0].textContent == catcher) { //checking for repetitive answers on tiles..
    obj1[0].textContent = 3
} else if (obj1[1].textContent == catcher) {
    obj1[1].textContent = 4
}else if (obj1[2].textContent == catcher) {
    obj1[2].textContent = 5
}else if (obj1[3].textContent == catcher) {
    obj1[3].textContent = 3
}else if (obj1[4].textContent == catcher) {
    obj1[4].textContent = 4
}else if (obj1[5].textContent == catcher) {
    obj1[5].textContent = 5
}else if (obj1[6].textContent == catcher) {
    obj1[6].textContent = 3
}else if (obj1[7].textContent == catcher) {
    obj1[7].textContent = 4
}else if (obj1[8].textContent == catcher) {
    obj1[8].textContent = 5
}

switch (int) { //assigning the value of sum of addition to random tiles!
    case 1:
        obj1[0].textContent = catcher;
        break;
     case 2:
         obj1[1].textContent = catcher;
         break;
      case 3:
          obj1[2].textContent = catcher;
          break;
       case 4:
            obj1[3].textContent = catcher;
            break;
        case 5:
             obj1[4].textContent = catcher;
             break;
         case 6:
              obj1[5].textContent = catcher;
              break;
          case 7:
               obj1[6].textContent = catcher;
               break;
            case 8:
                obj1[7].textContent = catcher;
                break;
             case 9:
                 obj1[8].textContent = catcher;
                 break;    
};
let container = document.getElementById("boxContainer");
let Restart = document.getElementById("again");
Restart.addEventListener("click", (e) => {
    location.reload();
})
console.log(int);
for (let obj of obj1) {
    obj.addEventListener("click", (e) => {
        if (obj.textContent == catcher) {
            score.textContent = `Score is: ${+45}`
        } else {
            lost.textContent = "You have lost! Restart?";
            lost.style.color = "azure";
            lost.style.display = "flex";
            lost.style.justifyContent = "center";
            lost.style.height = "170px";
            lost.style.alignItems = "center";
            lost.style.fontSize = "58px";
            lost.style.fontFamily = " 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
            container.textContent = " ", joem.textContent = " ";
        }
    })
}