// let str = 'Он ищет подстроку substr в строке str, начиная с позиции position, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений';

// let target = 'str'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//    if (foundPos == -1)  break;

//   console.log( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции

// } 


// //-------------------------------------------

// // 2 вариант

// let position = -1;
// while ((position = str.indexOf(target, position + 1)) != -1) {
//   console.log(`Найдено тут: ${position}`);
// }

// //-----------------------------------------

// // поиск заданных подстрок (проверка на спам)

// const checkIn = (str) => {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx'); 
// }
// console.log(checkIn('buy ViAgRA now') )
// console.log(checkIn('free xxxxx'))
// console.log(checkIn("innocent rabbit"))


// // Укорачивание строки

// const myStr = (str, maxlength) => {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }
// console.log(myStr("Вот, что мне хотелось бы сказать на эту тему:", 20))
// console.log(myStr("Всем привет!", 20))


let str = "$120"
console.log( +str.slice(1) ) //slice возвращает строку, начиная от указанного символа и до конца (если нет второго аргумента), унарный + преобразует в число
let str1 = '120$долларов'
console.log(parseInt(str1))  // parseInt вычисляет число из строки, если числовое стоит до буквенных символов