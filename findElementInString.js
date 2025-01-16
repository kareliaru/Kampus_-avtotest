const myString = 'В JavaScript любые текстовые данные являются строками. Не существует отдельного типа «символ», который есть в ряде других языков.'

let target = 'о'
let pos = 0
let sumPos = 0
let elemArray = []
while (true){
    let foundPos = myString.indexOf(target, pos)
    if (foundPos == -1) break
    
    elemArray.push(foundPos)
    pos = foundPos + 1
    sumPos ++

}
if (elemArray.length ===0) {
   console.log(`Символ '${target}' отсутствует`) 
} else {
    
//console.log (`Найдено на позиции: ${foundPos}`)
console.log(`Символ '${target}' найден ${sumPos} раз(а) на позиции ${elemArray}.`)

}