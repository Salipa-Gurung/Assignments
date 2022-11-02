function romanToInteger(s) {
  const I = 1;
  const V = 5;
  const X = 10;
  const L = 50;
  const C = 100;
  const D = 500;
  const M = 1000;
  const romanArr = [...s];
  let total = 0;

  for (let i = 0; i < romanArr.length; i++) {
    let nextElement = romanArr[i + 1];
    let decrementedVal = 0;

    // if (nextElement <= romanArr.length) {
    if (romanArr[i] == "I") {
      if (nextElement == "V") {
        decrementedVal = V - I;
        total += decrementedVal;
        //   console.log(total);
        i++;
      } else if (nextElement == "X") {
        decrementedVal = X - I;
        total += decrementedVal;
        i++;
      } else if (nextElement != "V" && nextElement != "X") {
        console.log(total);
        total += I;
      }
      // console.log(total);
    } else if (romanArr[i] == "X") {
      if (nextElement == "L") {
        decrementedVal = L - X;
        total += decrementedVal;
        i++;
      } else if (nextElement == "C") {
        decrementedVal = C - X;
        total += decrementedVal;
        i++;
      } else if (nextElement != "L" && nextElement != "C") {
        total += X;
      }
    } else if (romanArr[i] == "C") {
      if (nextElement == "D") {
        decrementedVal = D - C;
        total += decrementedVal;
        i++;
      } else if (nextElement == "M") {
        decrementedVal = M - C;
        total += decrementedVal;
        i++;
      } else if (nextElement != "D" && nextElement != "M") {
        total += C;
        // console.log(total);
      }
    } else if (romanArr[i] == "V") {
      total += V;
    } else if (romanArr[i] == "L") {
      total += L;
    } else if (romanArr[i] == "D") {
      total += D;
    } else if (romanArr[i] == "M") {
      total += M;
    }
    // }
    // console.log(i);
  }
  return total;
}
// const s = "LVIII";
// const s = "III";
// const s = "LIV";
// const s = "MCMXCIV";
// const s = "MCD";
const s = "MDCCCLXXXIV";
// const s = "CCC";
const res = romanToInteger(s);
console.log(res);
