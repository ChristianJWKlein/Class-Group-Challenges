//Challenge 1

const usd = 95;
function usdToAda(money) {
  const ada = 1.21 * money;
  console.log(` $${money} usd is equal to ${ada} ada`);
}
usdToAda(usd);

//challenge 2

const tempC = 8.5;
function cToF(temp) {
  const tempF = temp * (9 / 5) + 32;
  console.log(`${temp} degrees Celsius is equal to ${tempF} Fahrenheit`);
}
cToF(tempC);

//challenge 3

const tips = [5, 8, 13, 2, 14, 27, 9, 18];
let total = 0;

function calcTips(arr) {
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
}

calcTips(tips);

const myArr = [5, 8, 7, 12, 13, 17, 22];
let evenTotal = 0;

function addEven(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenTotal += arr[i];
    }
  }
  console.log(evenTotal);
}

addEven(myArr);
