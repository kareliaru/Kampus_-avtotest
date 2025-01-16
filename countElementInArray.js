const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple', 'apple', 'kiwi', 'orange']

const countElement = {}

const countItems = (arr) => {
 arr.forEach( i => {
    if (!countElement[i]) {
        countElement[i] = 1
    } else 
    countElement[i] += 1
    
 });
 return countElement
}
countItems(fruits)
console.log(countElement)

const unique = {};
const uniqueElements = (arr) => {
    arr.forEach(elem => {
    unique[elem] = true;
  });
  return unique
}
uniqueElements(fruits)
const uniqueArray = Object.keys(unique)
console.log(uniqueArray)