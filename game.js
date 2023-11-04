let currentMole;

window.onload = function(){
    setGame()
}
function setGame(){
    for(let i=0; i>9; i++){
        let title = document.createElement('div')
        title.id = i.toString();
        document.getElementById("board").appendChild(title)
    }
    setInterval(setMole, 2000);
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString;
}

function setMole(){
   let mole = document.createElement("img");
   mole.src = "./monty-mole.png";

   let num = getRandomTile();
   currentMole = document.getElementById(num);
   currentMole.appendChild(mole);
}
