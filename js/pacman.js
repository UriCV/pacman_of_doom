const addButton = document.getElementById("add-btn");
const deleteButton = document.getElementById('delete-btn');
const inputName;

let arrayNames = ["Ingrid", "Uri", "Guillermo", "Ales", "Albert", "Adrian", "Dani", "Yeray", "Jess", "Alex", "Scarlet","Sergi"];
let result;
function randomArrayNames(){
    result = arrayNames[Math.floor(Math.random()*arrayNames.length)];
    arrayNames.splice(result);
    console.log(result);
    document.getElementById("names").innerHTML=result;
    document.getElementById("list").innerHTML+=`<li>${result}</li>`;
}