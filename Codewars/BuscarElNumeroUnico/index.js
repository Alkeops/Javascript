const buscarUnico = arr => arr.find(element => arr.lastIndexOf(element) === arr.indexOf(element));
/* Esta fue de las primeras soluciones que se me ocurrio. La idea es simple
en un array buscar el elemento cuyo ultimo index de aparicion sea el mismo
que el primer index donde aparece. 
Viendolo en retrospectiva la solución aunque aparentemente corta no es
optima. Su complejidad es O(n²) y debe evitarse.
 */

let resultado = buscarUnico([ 0, 1, 0 ]);
    console.log(resultado)
    resultado = buscarUnico([ 1, 1, 1, 2, 1, 1 ]);
    console.log(resultado)
    resultado = buscarUnico([ 3, 10, 3, 3, 3 ])
    console.log(resultado)
    console.log("---------------")


const buscarUnico2 = arr => {
    let counter = {};
    
    for(let value of arr){
      counter[value] = counter[value] + 1 || 1;
    }
    for(let key in counter){
      if(counter[key] === 1) return parseFloat(key)
    }
  }
/*
 Version optimizada sin bucles anidados, aparentemente mas larga, esta
 mejor optimizada.
 Se agrega un objeto contador en el que la llave serian los numeros del
 array y el valor seria la cantidad de veces que aparece, luego se itera
 sobre el objeto buscando aquella llave cuyo valor sea igual a 1.
 Cabe aclarar que en un objeto las llaves son string entonces al retornar
 hay que convertirla en numero
*/

resultado = buscarUnico2([ 1,3,0, 1, 0 ]);
console.log(resultado)
resultado = buscarUnico2([ 1, 1, 1, 2, 3, 3, 2, 2, 7, 1, 1 ]);
console.log(resultado)
resultado = buscarUnico2([ 3, 10, 3, 3, 3, 10, 10, 9, 3 ])
console.log(resultado)