
const cuentaLetras = str => {
    let letras = {};
    for(let i = 0; i < str.length; i++){
        let caracter = str[i].toLowerCase();
        if(/[a-z0-9]/.test(caracter)){ //Se usa una expresion regular para comprobar si el caracter es diferente a numeros o letras.
            if(letras[caracter] > 0 ){
                letras[caracter]++;
            }else{
                letras[caracter] = 1;
            }
        }
    }
    console.log(letras)
    return letras
}

cuentaLetras("aaaa");
cuentaLetras("Aqui hay letras!!!");

//REFACTORIZADO

const cuentaLetras2 = str => {
    let letras = {};
    for(let caracter of str){
        caracter = caracter.toLowerCase();
        if(esUnNumeroLetra(caracter)){
            letras[caracter] = ++letras[caracter] || 1;
        }
    }
    console.log(letras)
    return letras
}

//Aunque fisicamente el codigo puede verse más abultado, ademas de usar una funcion extra, en cuestiones de rendimiento este metodo es hasta un 55% más rapido

const esUnNumeroLetra = caracter => {
    let codigo = caracter.charCodeAt();
    if(!(codigo > 47 && codigo < 58) &&
    !(codigo > 64 && codigo < 91) &&
    !(codigo > 96 && codigo < 123)) {
        return false
    }
    return true
}

cuentaLetras2("bbbb");
cuentaLetras2("Una $tring diferente!!");