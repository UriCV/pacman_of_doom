const vius = document.getElementById("vius");
const morts = document.getElementById("morts");
const names = document.getElementById("names");
const pacman = document.getElementById("pacman");
const addBtn = document.getElementById("add-btn");
const restartBtn = document.getElementById("restart-btn");

let arrayNames = ["Ingrid", "Uri", "Guillermo", "Ales", "Albert", "Adrian", "Dani", "Jose Miguel", "Jess", "Alex", "Scarlet","Sergi"];

function randomArrayNames() {
    if (arrayNames.length !== 0) {
        let random = Math.floor(Math.random()*arrayNames.length);
        let itemExtract = arrayNames[random];
        arrayNames.splice(random, 1);
        printLives();
        names.innerHTML = itemExtract;
        pacman.classList.add("eat");
        addBtn.disabled = true;
        restartBtn.disabled = true;
        names.style.color = "orange";
        setTimeout(function(){
            morts.innerHTML+=`<li>${itemExtract}</li>`;
            names.style.color = "#1919A6";
        }, 1350);
        setTimeout(function(){
            pacman.classList.remove("eat");
            addBtn.disabled = false;
            restartBtn.disabled = false;
            names.innerHTML="";
        }, 4990);
        // setTimeout(acció, temps) 
        // -> l'acció en general es una funcio
        // -> el temps es en milisegons
        // -> un cop pasin els segons s'activa la funció
    }
}

// cicle for
function printLives() {
    vius.innerHTML = "";
    for (let i = 0; i < arrayNames.length; i++){
        vius.innerHTML += `<li>${arrayNames[i]}</li>`;
        // vius.innerHTML = vius.innerHTML + `<li>${arrayNames[i]}</li>`;
    }
    /* // explicacio de for
    let posicio = 0;
    vius.innerHTML += `<li>${arrayNames[posicio]}</li>`;

    posicio = posicio + 1; // 1
    vius.innerHTML += `<li>${arrayNames[posicio]}</li>`;

    posicio = posicio + 1; // 2
    vius.innerHTML += `<li>${arrayNames[posicio]}</li>`; */
}

function restart() {
    // llistat verd original -> arrayNames
    arrayNames = ["Ingrid", "Uri", "Guillermo", "Ales", "Albert", "Adrian", "Dani", "Jose Miguel", "Jess", "Alex", "Scarlet","Sergi"];
    // llistat vermell inserta text -> reset HTML
    morts.innerHTML = "Dead:"; 
    // nom seleccionat buit -> reset HTML
    names.innerHTML = "";
    // imprimir de nou el llistat
    printLives();
}

printLives(); // executa la funció printLives()
