const compararArray = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false; //Si no tienen el mismo largo no tiene caso continuar

    for(let i = 0; i < arr1.length; i++){ // O(n)
        let existeCuadrado = arr2.indexOf(arr1[i] ** 2 ); // O(n) pues la complejidad depende enteramente del tamaño del array al realizar una busqueda
        if( existeCuadrado === -1 ) return false;
        arr2.splice(existeCuadrado, 1)
        return true
    }
    //Lo que hace es buscar en el segundo array el indice de un elemento que sea el cuadrado del elemento del primer array y si existe elimina ese elemento del segundo array para continuar con la iteración.
} //Este algoritmo es O(n²).

let tieneElCuadrado = compararArray([1,2,3], [4,1,9])
console.log(tieneElCuadrado);
tieneElCuadrado = compararArray([1,2],[2,4])
console.log(tieneElCuadrado);
tieneElCuadrado = compararArray([1,2],[1,4,1])
console.log(tieneElCuadrado);
tieneElCuadrado = compararArray([1,2,3,2], [9,1,4,4])
console.log(tieneElCuadrado);

//Version mejorada reduciendo el nivel de complejidad a O(n)

const compararArray2 = (arr1, arr2) => {
    let contadorDeFrecuencia1 = {}; /* Un objeto para contar cuantas veces aparece el mismo elemento donde la key/clave
    seria el elemento y el valor la cantidad de veces que aparece */
    let contadorDeFrecuencia2 = {};

    for(let valor of arr1){
        contadorDeFrecuencia1[valor] = (contadorDeFrecuencia1[valor] || 0 ) + 1
    } //Rellenando el objeto
    for(let valor of arr2){
        contadorDeFrecuencia2[valor] = (contadorDeFrecuencia2[valor] || 0 ) + 1
    }
    for(let llave in contadorDeFrecuencia1){
        //Si no existe el cuadrado de la llave en el segundo contador
        if(!(llave ** 2 in contadorDeFrecuencia2)) return false;
        /* Si el valor dentro de la llave al cuadrado dentro del segundo contador no existe la misma cantidad de veces en
        el primer contador */
        if(contadorDeFrecuencia2[llave ** 2] !== contadorDeFrecuencia1[llave]) return false; 
    }
    return true
}  /* Este ejemplo más largo en apariencia es más eficiente, son tres bucles pero SEPARADOS haciendo que la complejidad sea 
O(3n) que para fines practicos se simplifica en O(n). Notese simplemente la diferencia en el siguiente dato, supongamos 
que cada array tiene 1000 elementos, en este caso (compararArray2), el total de las iteraciones(dado por los 3 bucles) 
seria de 1000*3  = 3000, en cambio en el caso anterior (compararArray1), al ser un bucle y dentro la operación indexOf(que 
por si sola es O(n) al tener que buscar elemento por elemento) el total de operaciones en el peor de los casos seria de
1000 (por el for), 1000(por el IndexOf) entonces 1000*1000 = 1,000,000!!!. Efectivamente, a pequeña escala, uno no podria
notar la diferencia pero al ir aumentando la cantidad de datos la diferencia es abismal, en este caso la diferencia es de 
solo 997,000 operaciones. 
¿Pensabas que lo importante es llegar al mismo resultado sin importar como? */

console.log("--------------------------")
tieneElCuadrado = compararArray2([1,2,3], [4,1,9])
console.log(tieneElCuadrado);
tieneElCuadrado = compararArray2([1,2],[2,4])
console.log(tieneElCuadrado);
tieneElCuadrado = compararArray2([1,2],[1,4,1])
console.log(tieneElCuadrado);
tieneElCuadrado = compararArray2([1,2,3,2], [9,1,4,4])
console.log(tieneElCuadrado);
tieneElCuadrado = compararArray2([2,7,5,2,3,2], [9,49,4,25,4,4])
console.log(tieneElCuadrado);