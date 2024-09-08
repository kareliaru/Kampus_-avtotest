cicle:
while (true) {

    let value = +prompt("Введите число", '');
    if (value > 100)
        alert(`Ваше число: ${value}`);
    if (value < 100)
        alert ("Введите число > 100");
    if (!value) break cicle; 
}   
            
  
