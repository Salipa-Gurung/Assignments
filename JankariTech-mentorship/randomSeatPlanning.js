import PromptSync from "prompt-sync";

const prompt = PromptSync();

function randomNo(){
    const total = prompt('Enter total number of students: ');
    const studentName = new Array(total);
    const result = new Array(total);
    for(let i = 0; i < total; i++) {
        studentName [i] = prompt('Enter Name: ');
    }
    // console.log("studentName array ko");
    // for(let i=0;i<total;i++){
    //     console.log(studentName[i]);
    // }
    // console.log("------------------");
    
    // do{
        for(let i = 0; i < total; i++){
            const rndmNo = Math.floor(Math.random() * total);
            if(result[rndmNo] == null){
                result[rndmNo] = studentName[i];
                console.log(result[rndmNo]);
            }
        }
    // }while(result.every(r => studentName.includes(r)))
}
randomNo();

// const total = prompt('Enter total number of students: ');
// var studentName = new Array(total);
// for(let i = 0; i < total; i++) {
//     studentName [i] = prompt('Enter Name: ');
// }