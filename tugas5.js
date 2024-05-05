function stringManipulation(word){
let vocal=['A','I','U','E','O'];

console.log( vocal.find(name=>name===word.slice(0,1).toUpperCase())==undefined ?  `'${word.slice(1,word.length).concat(word.slice(0,1)).concat('nyo')}'`  :`'${word}'`);
}

stringManipulation('ayam');
stringManipulation('bebek');