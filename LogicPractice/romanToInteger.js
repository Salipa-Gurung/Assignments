// const s = "LVIII";
// const s = "III";
// const s = "LIVIII";
// const s = "MCMXCIV";
const s = "MCD";
function romanToInteger() {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  const arr = [...s];

  for (let i = 0; i < arr.length; i++) {
    const objKey = arr[i];
    let nextKey = arr[i + 1];
    let decrementedVal = 0;
    let objValue;

    if (objKey == Object.keys(roman)[0]) {
      if (nextKey == Object.keys(roman)[1]) {
        decrementedVal = roman.V - roman.I;
        total += decrementedVal;
        console.log(decrementedVal);
        i++;
      } else if (nextKey == Object.keys(roman)[2]) {
        decrementedVal = roman.X - roman.I;
        total += decrementedVal;
        i++;
      }
      objValue = roman[objKey];
      total += objValue;
    } else if (objKey == Object.keys(roman)[2]) {
      if (nextKey == Object.keys(roman)[3]) {
        decrementedVal = roman.L - roman.X;
        console.log(decrementedVal);
        total += decrementedVal;
        i++;
      } else if (nextKey == Object.keys(roman)[4]) {
        decrementedVal = roman.C - roman.X;
        total += decrementedVal;
        i++;
      }
      objValue = roman[objKey];
      total += objValue;
    } else if (objKey == Object.keys(roman)[4]) {
      if (nextKey == Object.keys(roman)[5]) {
        decrementedVal = roman.D - roman.C;
        console.log(decrementedVal);
        total += decrementedVal;
        i++;
      } else if (nextKey == Object.keys(roman)[6]) {
        decrementedVal = roman.M - roman.C;
        console.log(decrementedVal);
        total += decrementedVal;
        i++;
      }
      objValue = roman[objKey];
      total += objValue;
    } else {
      objValue = roman[objKey];
      total += objValue;
    }
  }
  return total;
}
const res = romanToInteger(s);
console.log(res);
