let n = 50;
console.log('Простые числа: ')
nextPrime:
for (let i = 1; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

 console.log( i ); 
}
