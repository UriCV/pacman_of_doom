
let arrayNames = ["Ingrid", "Uri", "Guillermo", "Ales", "Albert", "Adrian", "Dani", "Yeray", "Jess", "Alex", "Scarlet","Sergi"];
let result;
function randomArrayNames() {
    let random = Math.floor(Math.random()*arrayNames.length);
    console.log(random);
    let itemExtract = arrayNames[random];
    arrayNames.splice(random, 1);
    document.getElementById("names").innerHTML= itemExtract;
    document.getElementById("list").innerHTML+=`<li>${itemExtract}</li>`;
}