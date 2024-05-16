
const readline = require("node:readline");
const fs = require('node:fs');
const result=fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(result);
let next=0;
let winner=0;
let maxQuiz=data.length-1;
let rl;

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Pertanyaan : data ${data[next].definition} \nJawaban : `, 
});

rl.prompt();  

rl.on("line", (line) => {  
    if (data[next].term.toUpperCase().trim()==line.toUpperCase().trim()){
        winner++;
        console.log('Selamat Anda benar !');
    }  else{
        console.log('Wwkkk, Anda belum beruntung !');
    }

 
    if (next == maxQuiz ){
      
        if (winner==(maxQuiz+1)) {
            console.log('Hore Anda Menang!');
         }
        process.exit(0);
    }
    next++
 
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: `Pertanyaan : data ${data[next].definition} \nJawaban : `, 
    });
   
    rl.prompt(); 
}).on("close", (line) => {
    process.exit(0);

});
