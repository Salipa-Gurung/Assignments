// Program to input string and writing that string into abc.txt file using promise

import fs from "fs"; // for file handling
import PromptSync from "prompt-sync";

const prompt = new PromptSync();

// --------------------------------------------method1-----------------------------------------------

// This function returns promise which writes given data into abc.txt file
function writeToFilePromise() {
  return new Promise((resolve, reject) => {
    // taking input
    const message = prompt("Enter message to be written in abc.txt : ");

    // appending entered data in abc.txt
    fs.appendFile("abc.txt", message, function (err) {
      if (err) {
        reject("Error");
      } else {
        resolve("successfully");
      }
    });
  });
}

writeToFilePromise()
  .then((message) =>
    console.log(
      "--------------Text written to abc.txt " + message + "--------------"
    )
  )
  .catch((error) => console.log(error));
// ------------------------------------------method1-end----------------------------------------------

// --------------------------------------------method2------------------------------------------------
// let myPromise = new Promise((resolve, reject) => {
//     const message = prompt("Enter message to be written in abc.txt : ");
//     fs.appendFile('xyz.txt', message, function (err){
//         if(err) {
//             reject("Error");
//         }else {
//             resolve("Success");
//         };
//     })
// });

// myPromise
//     .then(function (value) {
//         console.log("Promise fulfilled: ",value);
//     })
//     .catch(function(err){
//         console.log("Error :",err);
//     })
// -------------------------------------------method2-end----------------------------------------------
