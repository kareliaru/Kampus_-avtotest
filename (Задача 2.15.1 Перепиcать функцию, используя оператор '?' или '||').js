let age = +prompt("Введите свой возраст", "");

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}
checkAge(age);
//_________________________________________________-
function checkAge(age){
    return(age > 18) ? true : confirm('Родители разрешили?');
}
checkAge(age);
//__________________________________________________
function checkAge(age){
    return(age > 18) || confirm('Родители разрешили?')
}

checkAge(age); 
//---------------------------------------------------
let age = +prompt("Введите свой возраст", "");
(age > 18) ? alert("true") 
: alert(`Вам ${age}`, "Родители разрешили?");
//---------------------------------------------------
