# BIG O NOTATION

Nos permite determinar el nivel de complejidad de un algoritmo midiendo su rendimiento en cuanto a espacio, recursos, tiempo de ejecución, etc.

Los terminos de complejidad mas utilizados son:

* **O(1)** ------ *Constante*
* **O(n)** ------  *Lineal*
* **O(n^2)** ----  *Cuadrática*

<br>


## **O(1)** Complejidad Constante

<br>

No importa el tamaño de la entrada o la salida, el tiempo de ejecución y los recursos utilizados siempre son los mismos.

### **Ejemplo:**
*Implementar un código que dado un numero calcule la suma de todos los numeros desde 1 hasta el numero dado:*

<pre>
const suma = num => num * (num +1) / 2;

suma(3) <i>//Salida Esperada: 6 </i>
</pre>

En este código vemos como independientemente del valor de la variable num el tiempo de ejecución siempre sera el mismo pues siempre se van a realizar el mismo numero de operaciones.

Realizar código que sea **O(1)** es lo más optimo, sin embargo, es un *objetivo* no una *obsesion* pues a veces no es posible lograr.

<br>

## **O(n)** Complejidad Lineal

<br>

El tiempo de ejecucion y/o recursos utilizados son directamente proporcional al tamaño de los valores de entrada.

### **Usando el mismo ejemplo anterior:**
*Implementar un código que dado un numero calcule la suma de todos los numeros desde 1 hasta el numero dado*

<pre>
const suma = num => {
    let total = 0;
    for(let i = 1; i <= num; i++){
        total += 1;
    }
    return total;
}

suma(3) <i>//Salida Esperada: 6</i>
</pre>

Aunque la solución sea la misma que en el ejemplo anterior, aqui esta menos optimizado, se realiza un bucle que esta enteramente relacionado a la variable dada a la función.

En este caso en particular podria ser optimizado, pero aun asi un código que sea **O(n)** es un resultado aceptable, pues el tiempo es lineal.

