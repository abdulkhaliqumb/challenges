const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Tulis kalimat kamu disini >", 
});
rl.prompt();  
rl.on("line", (line) => {
    sentenceManipulation(line.trim());  
    rl.prompt(); 
}).on("close", (line) => {
    console.log('God Bye');
    process.exit(0);

});
function sentenceManipulation(sentence){
    let splitWord=sentence.split(" ");
    resultManipulation='';
    for (let i=0 ; i< splitWord.length;i++){
      resultManipulation+=stringManipulation(splitWord[i]).concat(" ");
    }
    console.log(resultManipulation.trim());
  
    function stringManipulation(word){
      let vocal=['A','I','U','E','O'];
      let wordChange=vocal.find(name=>name===word.slice(0,1).toUpperCase())==undefined ? 
      word.slice(1,word.length).concat(word.slice(0,1)).concat('nyo')  : word;
      return wordChange
      }
  }

