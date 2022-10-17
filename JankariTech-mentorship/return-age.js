// Program to display random age according to given name through API call implementing async and await

import fetch from "node-fetch";
import promptSync from "prompt-sync";

async function returnAge(argName) {
  try {
    // Passing data of name from argument in url by get method
    const response = await fetch(`https://api.agify.io/?name=${argName}`);
    const result = await response.json();

    // Object destructuring to extract name and age
    const { age, name } = result;
    // console.log(`Age of ${name} is : `, age);
    return { age: age, name: name };
  } catch (err) {
    console.log(err);
  }
}

// Window object is not defined in node.js environment(Vs code) so to use prompt-->
const prompt = promptSync();
var inputName = prompt("Enter name : ");

// returnAge(name);
const { age, name } = await returnAge(inputName);
console.log(`Age of ${name} is : `, age);
