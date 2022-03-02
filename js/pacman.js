let vius = document.getElementById("vius");
let arrayNames = ["Ingrid", "Uri", "Guillermo", "Ales", "Albert", "Adrian", "Dani", "Yeray", "Jess", "Alex", "Scarlet","Sergi"];

function randomArrayNames() {
    let random = Math.floor(Math.random()*arrayNames.length);
    console.log(random);
    let itemExtract = arrayNames[random];
    arrayNames.splice(random, 1);
    document.getElementById("names").innerHTML= itemExtract;
    document.getElementById("morts").innerHTML+=`<li>${itemExtract}</li>`;
}

// cicle for
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