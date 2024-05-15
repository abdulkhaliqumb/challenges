
const readline = require("node:readline");
const fs = require('node:fs');
const result=fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(result);
let random;
let winner=0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Pertanyaan : data ${data[0].definition} \nJawaban : `, 
});
const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Pertanyaan : data ${data[1].definition} \nJawaban : `, 
});


rl.prompt();  

rl.on("line", (line) => {
    winner = 0;
   
    if (data[0].term.toUpperCase().trim()==line.toUpperCase().trim()){
        winner++;
        console.log('Selamat Anda benar !');
    }  else{
        console.log('Wwkkk, Anda belum beruntung !');
    }
    r2.prompt();  


}).on("close", (line) => {
    
    process.exit(0);

});

r2.on("line", (line2) => {
  
   
    if (data[1].term.toUpperCase().trim()==line2.toUpperCase().trim()){
        winner++;
        console.log('Selamat Anda benar !');
    }  else{
        console.log('Wwkkk, Anda belum beruntung !');
    }
 
}).on("close", (line2) => {
    if (winner=data.lenght) {
       console.log('Hore Anda Menang!');
    }
    process.exit(0);

});

