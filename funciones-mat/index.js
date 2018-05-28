// 1986 * (1980+1542)
const add = function (sumador1, sumador2) {
  return sumador1 + sumador2;
};

const multiply = function (factor1, factor2) {  
  return factor1 * factor2;
};


let resultado = multiply(1986,add(1980,1542));
console.log (resultado);