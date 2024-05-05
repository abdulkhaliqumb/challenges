function sentenceManipulation(sentence){
  let splitWord=sentence.split(" ");
  resultManipulation='';
  for (let i=0 ; i< splitWord.length;i++){
    resultManipulation+=stringManipulation(splitWord[i]).concat(" ");
  }
  console.log(`'${resultManipulation.trim()}'`);

  function stringManipulation(word){
    let vocal=['A','I','U','E','O'];
    let wordChange=vocal.find(name=>name===word.slice(0,1).toUpperCase())==undefined ? 
    word.slice(1,word.length).concat(word.slice(0,1)).concat('nyo')  : word;
    return wordChange
    }
}
 
sentenceManipulation('ibu pergi ke pasar bersama aku');
  
  