
let arrayNames = ["Ingrid", "Uri", "Guillermo", "Ales", "Albert", "Adrian", "Dani", "Yeray", "Jess", "Alex", "Scarlet","Sergi"];
let result;
function randomArrayNames(){
    console.log(arrayNames);
    let result = arrayNames[Math.floor(Math.random()*arrayNames.length)];
    console.log("Abans d'splice: " + result);
    let splicedName = arrayNames.splice(result, 1);
    console.log("Després d'splice: " + result);
    console.log('aa',delete result);
    console.log(splicedName);
    document.getElementById("names").innerHTML=result;
    document.getElementById("list").innerHTML+=`<li>${result}</li>`;
}

