const maxSumArray = (arr, num) => {
    if(num > arr.length) return null
    let max = -Infinity; /*Podria ser que la mayor suma sea un numero negativo*/ 
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i+j]; /*Toma desde el primer digito hasta el n y los suma, despues 
            pasa al siguiente, en soluciones pequeñas aparentemente es lo mismo, pero supongamos
            que n = 100000, esto quiere decir que se recorrerian los 100000 cada una de las veces
            que se pudiese.*/
        }
        if (temp > max) max = temp;
    }
    return max;
}
/* Solucion O(n²) Otra vez se anidan bucles */
let resultado = maxSumArray([1,2,5,2,8,1,5], 2);
console.log(resultado) 
    resultado = maxSumArray([1,2,5,2,8,1,5], 4);
console.log(resultado) 
    resultado = maxSumArray([1,2,5,2,8,1,5], 5);
console.log(resultado) 

const maxSumArray2 = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
        /* Se crea la ventana apartir de la posicion 0
        hasta la posicion n */
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){ /* La logica de la ventana corrediza
        es que ahora, ya tenemos lso primeros n digitos, para saber la suma
        unicamente a esa suma existente hay que restarle el elemento que se encuentra
        al principio y sumar el elemento que se encuentra al final, literalmente ir
        corriendo/deslizando el foco */
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
/* La complejidad baja a O(n) pues aunque son dos bucles no
estan anidados */
console.log('---------------')
    resultado = maxSumArray2([1,2,5,2,8,1,5], 2);
console.log(resultado) 
    resultado = maxSumArray2([1,2,5,2,8,1,5], 4);
console.log(resultado) 
    resultado = maxSumArray2([1,2,5,2,8,1,5], 5);
console.log(resultado) 
