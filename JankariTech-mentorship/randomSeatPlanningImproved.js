// --------------------Random Seat Planning-----------------------
import PromptSync from "prompt-sync";

const prompt = PromptSync();

function randomSeatGenerator(){

    const total = prompt('Enter total number of students: '); //for array size of seat and studentName

    // creating array of size -> total
    const studentName = new Array();
    const pickedUpStudent = new Array();

    // loop for asking names
    for(let i = 0; i < total; i++) {
        studentName [i] = prompt('Enter Name: ');
    }

    while(studentName.length != 0 ){
        const randomNo = Math.floor(Math.random() * studentName.length);  //Generating random number(from 0 to total-1)
        pickedUpStudent.push(studentName[randomNo]) // writing picked up name of random index to new array
        studentName.splice(randomNo,1); // deleting element from index-> randonNo and 1-> means removing one element
    }

    // loop to output all random seat  
    console.log("---------------Shuffled Seat--------------");
    for(let i = 0; i < total; i++){
        console.log("Seat " + (i+1) + ": " + pickedUpStudent[i]);
    }
    console.log("------------------------------------------");
}

randomSeatGenerator();