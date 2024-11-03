// const readline = require('node:readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Введите ваше имя: ', (name) => {
//   console.log(`Привет, ${name}!`);
//   rl.close();
// });



const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});