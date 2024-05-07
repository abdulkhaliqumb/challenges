function pola(str){

   let valNumber=str.split(" ");
   let operand1=valNumber?.[0];
   let operand2=valNumber?.[2];
   let arrResulTemp=valNumber?.[4].split("");
   let position = arrResulTemp.indexOf('#') ;
   let newOperand1=0 ;
   let resultMultiply=0;
   let arrResultMultiply=new Array();

   let tampung=new Array();
   for (let i=0;i<10;i++){
      newOperand1 = operand1.replace(/#/g, i);
      resultMultiply=newOperand1 * operand2;
      arrResultMultiply=resultMultiply.toString().split("");
      tampung.push(arrResultMultiply)
    
   }

   let ok=0
   let notOk=0;
   for (let h=0;h<tampung.length-1;h++){
       ok=0;
       notOk=0;
       for (let j=0;j <arrResulTemp.length;j++){
         
           if (arrResulTemp[j]==tampung[h][j]){
               ok++;
               if (ok==(arrResulTemp.length-1)){
                   console.log([h,Number(tampung[h][position])]);
               }
           }else{
               notOk++
           }
       }
   }

}

pola("42#3 * 188 = 80#204");
pola("8#61 * 895 = 78410#5");