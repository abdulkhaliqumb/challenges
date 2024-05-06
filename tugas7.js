function wierdMultiply(n) {
  if (n <10){
      return n;
  } else {
      initialValue=1;
     const x=n.toString().split('').reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        initialValue,      
     )   
      return wierdMultiply(x);
  }


}
console.log(wierdMultiply(39));
console.log(wierdMultiply(999));
console.log(wierdMultiply(3));