var firstName = window.prompt("Welcome what is your first name? ")
var lastName = window.prompt("Your last name? ")
var age = window.prompt("What is your age?")
var height = window.prompt("How tall are you in centimeters")
var petName = window.prompt("What is your pet name?")

//Four conditions

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

if(firstName[0] === lastName[0]){
  nameCond = true;
}else{
  nameCond = false;
}

if(age >= 20 && age <= 30){
  ageCond = true;
}else{
  ageCond = false;
}

if(height >= 170){
  heightCond = true;
}else{
  heightCond = false;
}

if(petName[petName.lenght - 1] === "y"){
  petCond = true;
}else{
  petCond = false;
}


if(nameCond && ageCond && heightCond && petCond){
  console.log("Welcome spy!");
}else{
  console.log("Nothing here!");
}
