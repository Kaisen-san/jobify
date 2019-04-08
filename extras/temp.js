console.log(1);

setTimeout(() => {
  console.log('Ola em 2 segundos...');
}, 0);

console.log(2);

let count = 0;
let interval = setInterval(() => {
  console.log('ola');
  count++;

  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);

let count2 = 0;
let interval2 = setInterval(() => {
  console.log('ola2');
  count2++;

  if (count2 > 15) {
    clearInterval(interval2);
  }
}, 500);

console.log(3);