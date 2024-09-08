// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
let x = +prompt("x?", '');
let n = +prompt("n?", '');
function pow(x, n){
    return(x ** n)
}
alert( pow(x, n) );
