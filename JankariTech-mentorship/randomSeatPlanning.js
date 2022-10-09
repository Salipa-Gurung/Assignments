// --------------------Random Seat Planning-----------------------
import PromptSync from "prompt-sync";

const prompt = PromptSync();

function randomSeatGenerator(){

    const total = prompt('Enter total number of students: '); //for array size of seat and studentName

    // creating array of size -> total
    const studentName = new Array(total);
    const seatNo = new Array(total);

    // loop for asking names
    for(let i = 0; i < total; i++) {
        studentName [i] = prompt('Enter Name: ');
    }

    for(let i = 0; i < total; i++) {
        const randomNo = Math.floor(Math.random() * total);  //Generating random number (from 0 to total-1)
        const temp = studentName[randomNo];

        // checking if person is already assigned to seats
        if(!(seatNo.includes(temp))) {
            seatNo[i] = temp; //assigning a person to a seatNo of index i
        }
    }
    // loop to output all random seat  
    console.log("---------------Shuffled Seat--------------");
    for(let i = 0; i < total; i++){
        console.log("Seat " + (i+1) + ": " + seatNo[i]);
    }
    console.log("------------------------------------------");
}

randomSeatGenerator();