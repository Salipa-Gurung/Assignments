// --------------------Random Seat Planning-----------------------
import PromptSync from "prompt-sync";

const prompt = PromptSync();

function randomSeatGenerator() {
  const total = prompt("Enter total number of students: "); //for array size of seat and studentName

  // creating array of size -> total
  const studentName = new Array();
  const seatNo = new Array();

  // loop for asking names
  for (let i = 0; i < total; i++) {
    studentName[i] = prompt("Enter Name: ");
  }

  console.log(studentName);

  for (let i = 0; i < total; i++) {
    while (!seatNo[i]) {
      const randomNo = Math.floor(Math.random() * total); //Generating random number(from 0 to total-1)

      // checking if person is already assigned to seats
      if (!seatNo.includes(studentName[randomNo])) {
        seatNo[i] = studentName[randomNo]; //assigning a person to a seatNo of index i
      }
    }
  }

  console.log(seatNo);
  // loop to output all random seat
  console.log("---------------Shuffled Seat--------------");
  for (let i = 0; i < total; i++) {
    console.log("Seat " + (i + 1) + ": " + seatNo[i]);
  }
  console.log("------------------------------------------");
}

randomSeatGenerator();
