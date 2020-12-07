# Patron contador de Frecuencia

Es un patron que usa objectos para recolectar valores/ frecuencias de valores.

Este patron ayuda a evitar la necesidad de poner bucles anidados que resultarian en **O(n²)**.

## *Ejercicio*

***Escribe una funcion que tome dos arrays. La funcion debe retornar verdadero si cada valor en el arreglo es correspondido a su valor al cuadrado en el segundo arreglo. La frecuencia de los valores debe ser la misma***

<pre>
    comparaArray([1,2,3], [4,1,9]) <i>//Devolveria true porque 1² = 1, 2² = 4, 3² = 9</i>
    compararArray([1,2], [2,4]) <i>// Devolveria false por que 1² = 1, 2² = 4, y el segundo array solo contiene el 4</i>
</pre>