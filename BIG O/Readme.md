# BIG O NOTATION

Nos permite determinar el nivel de complejidad de un algoritmo midiendo su rendimiento en cuanto a espacio, recursos, tiempo de ejecución, etc.

Los terminos de complejidad mas utilizados son:

* **O(1)** ------ *Constante*
* **O(n)** ------  *Lineal*
* **O(n^2)** ----  *Cuadrática*
<br>
<br>
<br>

## **O(1)** Complejidad Constante

<br>

No importa el tamaño de la entrada o la salida, el tiempo de ejecución y los recursos utilizados siempre son los mismos.

### **Ejemplo:**
*Implementar un codigo que dado un numero calcule la suma de todos los numeros desde 1 hasta el numero dado:*

<pre>
const Suma = num => num * (num +1) / 2;
Suma(3) <i>//Salida Esperada: 6 </i>
</pre>

En este codigo vemos como independientemente del valor de la variable num el tiempo de ejecución siempre sera el mismo pues siempre se van a realizar el mismo numero de operaciones.

Realizar codigo que sea **O(1)** es lo más optimo, sin embargo, es un *objetivo* no una *obsesion* pues a veces no es posible lograr.

<br>

## **O(n)** Complejidad Lineal

<br>
