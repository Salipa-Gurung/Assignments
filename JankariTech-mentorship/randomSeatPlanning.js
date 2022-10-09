import PromptSync from "prompt-sync";

const prompt = PromptSync();

function randomSeatGenerator(){
    const total = prompt('Enter total number of students: ');
    const studentName = new Array(total);
    const result = new Array(total);
    for(let i = 0; i < total; i++) {
        studentName [i] = prompt('Enter Name: ');
    }
    for(let i = 0; i < total; i++) {
        const randomNo = Math.floor(Math.random() * total);
        const temp = studentName[randomNo];
        if(!(result.includes(temp))) {
            result[i] = studentName[randomNo];
        }
    }
    
    console.log("---------------Shuffled Seat--------------");
    for(let i = 0; i < total; i++){
        console.log(result[i]);
    }
    console.log("------------------------------------------");
        // for(let i = 0; i < total; i++){
        //     const rndmNo = Math.floor(Math.random() * total);
        //     if(result[rndmNo] == null){
        //         result[rndmNo] = studentName[i];
        //         console.log(result[rndmNo]);
        //     }
        // }
}
randomSeatGenerator();