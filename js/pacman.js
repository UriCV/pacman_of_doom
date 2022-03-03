let vius = document.getElementById("vius");
let arrayNames = ["Ingrid", "Uri", "Guillermo", "Ales", "Albert", "Adrian", "Dani", "Yeray", "Jess", "Alex", "Scarlet","Sergi"];

function randomArrayNames() {
    if (arrayNames.length !== 0) {
        let random = Math.floor(Math.random()*arrayNames.length);
        console.log(random);
        let itemExtract = arrayNames[random];
        arrayNames.splice(random, 1);
        printLives();
        document.getElementById("names").innerHTML= itemExtract;
        document.getElementById("morts").innerHTML+=`<li>${itemExtract}</li>`;
        document.getElementById("pacman").classList.add("eat");
        document.getElementById("add-btn").disabled = true;
        document.getElementById("names").style.color = "orange";
        setTimeout(function(){
            document.getElementById("names").style.color = "#1919A6";
        }, 1350);
        setTimeout(function(){
            document.getElementById("pacman").classList.remove("eat");
            document.getElementById("add-btn").disabled = false;
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
    arrayNames = ["Ingrid", "Uri", "Guillermo", "Ales", "Albert", "Adrian", "Dani", "Yeray", "Jess", "Alex", "Scarlet","Sergi"];
    // llistat vermell inserta text -> reset HTML
    document.getElementById("morts").innerHTML = "Dead:"; 
    // nom seleccionat buit -> reset HTML
    document.getElementById("names").innerHTML = "";
    // imprimir de nou el llistat
    printLives();
}

printLives(); // executa la funció printLives()
