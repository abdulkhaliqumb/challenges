function spiral(param1){

let matrix = [];
let val_column=0
for (let i = 0; i < param1; i++) {
  matrix[i] = [];
  for (let j = 0; j < param1; j++) {
    matrix[i][j] = val_column++;
  }
}

function traveler(matrix, result) {
  if (matrix.length == 0) {
      return result;
  }

  result = result.concat(matrix?.shift());


  matrix.forEach(rightEnd =>
      result.push(rightEnd?.pop()));


  var tmp = [];
  tmp=matrix.pop();
  result = result.concat(tmp?.reverse());

  var tmp = [];
  matrix.forEach(function(leftEnd) {    
      tmp.push(leftEnd?.shift());
  });
  result = result.concat(tmp?.reverse());

  return traveler(matrix, result);
}

var result = traveler(matrix, []);
console.log( result.filter((x) => x !== undefined));

}
spiral(5);
spiral(6);
spiral(7);
