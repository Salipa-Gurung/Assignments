import fs from "fs";

function writeToFile() {
  fs.appendFile("try.txt", "promise", function (err) {
    if (err) {
      console.log("error");
    }
    console.log("Saved!");
  });
}

let myPromise = new Promise(writeToFile);

myPromise
  .then(function (value) {
    console.log("Promise fulfilled: ", value);
  })
  .catch(function (err) {
    console.log("Error :", err);
  });

export { writeToFile };
