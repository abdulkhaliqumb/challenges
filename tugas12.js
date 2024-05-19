const readline = require("node:readline");
const fs = require('node:fs');

let next=0;
let winner=0;
let trying=0;
let namaFile="";
let skipQuestion=false;
let skipQuestionNo=-1;

process.argv.forEach(function (val, index, array) {
    if (index==2){
        namaFile=String(val);
    }

});

if (namaFile=="" || namaFile=="undefined" ){
    console.log(`Tolong sertakan nama file sebagai inputan soalnya 
    Misalnya 'node tugas12.js data.json'`)
    return false;
};

const result=fs.readFileSync(namaFile, 'utf8');
  
const data = JSON.parse(result);
let maxQuiz=data.length-1;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `Tebakan : `, 
});
console.log( `Pertanyaan : data ${data[next].definition} `)
rl.prompt();  

rl.on("line", (line) => {   
  
    if (line.toUpperCase().trim()=='SKIP'){
        skipQuestion=true;
        skipQuestionNo=next;
        trying=0;
        next++
    }

    if (line.toUpperCase().trim()=='SKIP' && next==2){
        process.exit(0);
    }
    if (data[next].term.toUpperCase().trim()==line.toUpperCase().trim()  &&  line.toUpperCase().trim()!='SKIP' ) {
        
        winner++;   
        next++
        console.log("Anda  Beruntung !"); 
        if ( skipQuestion==true) {
            next=skipQuestionNo;
            skipQuestion=false;
          
        }
    }  else  if (data[next].term.toUpperCase().trim()!=line.toUpperCase().trim()  &&  line.toUpperCase().trim()!='SKIP' ) {
        trying++;
        console.log(`Anda Kurang Beruntung !, anda telah salah ${trying} ,silahkan coba lagi`);
    }
     
    if (winner==(maxQuiz+1)) {
        console.log('Hore Anda Menang!');
        process.exit(0);
        }

    console.log( `Pertanyaan : data ${data[next].definition} `)
    rl.prompt(); 
}).on("close", (line) => {
    process.exit(0);

});