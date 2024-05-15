
const readline = require("node:readline");
const fs = require('node:fs');
const result=fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(result);
const random=Math.floor(Math.random() * (data.length-1));
let winner=false;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Pertanyaan : data ${data[random].definition} \nJawaban : `, 
});


rl.prompt();  

rl.on("line", (line) => {
    winner = false;
   
    if (data[random].term.toUpperCase().trim()==line.toUpperCase().trim()){
        winner=true;
        console.log('Selamat Anda benar !');
    }  else{
        winner=false;
        console.log('Wwkkk, Anda belum beruntung !');
    }
    rl.prompt(); 
}).on("close", (line) => {
    if (winner=true) {
       console.log('Hore Anda Menang!');
    }
    process.exit(0);

});
