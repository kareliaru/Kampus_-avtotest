const students = [
    { name: 'alex', age: 20 },
    { name: 'mike', age: 24 },
    { name: 'masha', age: 20 },
    { name: 'stas', age: 18 },
    { name: 'john', age: 20 },
    { name: 'jack', age: 24 },
    { name: 'jimm', age: 18 },
  ];
const groupByAge = {}
function countByAge (arr) {
    arr.forEach(student => {
        if (!groupByAge[student.age]) {
            groupByAge[student.age] = [student]
        }else {
        groupByAge[student.age].push(student)
        }

    })
        return groupByAge
    
}
countByAge(students)
console.log(groupByAge)