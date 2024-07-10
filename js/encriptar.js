const letraEncriptada = [
    ['a', 'ai'],
    ['b', 'axd'],
    ['c', 'rgb'],
    ['d', 'awd'],
    ['e', 'enter'],
    ['f', 'sef'],
    ['g', 'drg'],
    ['h', 'fth'],
    ['i', 'imes'],
    ['j', 'huk'],
    ['k', 'jil'],
    ['l', 'koñ'],
    ['m', 'zsx'],
    ['n', 'xcd'],
    ['ñ', 'cfv'],
    ['o', 'ober'],
    ['p', 'vgb'],
    ['q', 'bhn'],
    ['r', 'njm'],
    ['s', 'kmkm'],
    ['t', 'qa'],
    ['u', 'ufat'],
    ['v', 'qaz'],
    ['w', 'qazw'],
    ['y', 'qazwsx'],
    ['z', 'zaqwsxe'],
];

function encriptarTexto(letra) {
    const letraMinuscula = letra.toLowerCase();
    const buscarLetra = letraEncriptada.find(item => item[0] === letraMinuscula);
    if (buscarLetra) {
        return buscarLetra[1];
    } else {
        return "sin significado";
    }
}

function desencriptarTexto(cadenaEncriptada){
    let textoDesencriptado = '';
    let i = 0;
    while (i < cadenaEncriptada.length) {
        let encontrado = false;
        for (let j = 2; j >= 0; j--) { 
            let subcadena = cadenaEncriptada.substring(i, i + j + 1);
            let letra = letraEncriptada.find(item => item[1] === subcadena);
            if (letra) {
                textoDesencriptado += letra[0];
                i += j + 1; 
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            textoDesencriptado += "Sin significado";
            i++;
        }
    }
    return textoDesencriptado;
}


function quitarElementos(id) {
    document.getElementById(id).style.display = "none";
}

function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarEncriptacion() {
    let cadenaIngresada = document.getElementById("textoUsuario").value;
    if (cadenaIngresada.length === 0) {
        alert("Campo vacío");
    } else {
        quitarElementos("texto1Contenido2");
        quitarElementos("texto2Contenido2");
        quitarElementos("img1Contenido2");
        //console.log("Cadena ingresada", cadenaIngresada);
        document.getElementById("textoCopiado").removeAttribute("hidden");
        //comprobación de que se muestra el texto
        //asignarTextoElemento("mostrarTexto", cadenaIngresada);
        //mostrar encriptación
        let textoEncriptado = '';
        for (let i = 0; i < cadenaIngresada.length; i++) {
            textoEncriptado += encriptarTexto(cadenaIngresada[i]);
        }
        asignarTextoElemento("mostrarTexto", textoEncriptado);
    }
}

function mostrarDesencriptacion() {
    let cadenaIngresada = document.getElementById("textoUsuario").value;
    if (cadenaIngresada.length === 0) {
        alert("Campo vacío");

    } else {
        quitarElementos("texto1Contenido2");
        quitarElementos("texto2Contenido2");
        quitarElementos("img1Contenido2");
        console.log("Cadena ingresada", cadenaIngresada);
        document.getElementById("textoCopiado").removeAttribute("hidden");
        //comprobación de que se muestra el texto
        //asignarTextoElemento("mostrarTexto", cadenaIngresada);
        //mostrar desencriptación
        let textoDesencriptado = desencriptarTexto(cadenaIngresada);
        /*let textoDesencriptado = '';
        for (let i = 0; i < cadenaIngresada.length; i++) {
            let letraEncriptada = cadenaIngresada[i];
            let letraDesencriptada = desencriptarTexto(letraEncriptada);
            textoDesencriptado += letraDesencriptada;
        }*/
        asignarTextoElemento("mostrarTexto", textoDesencriptado);
    }
}



document.getElementById("encriptar").addEventListener('click', mostrarEncriptacion);
document.getElementById("desencriptar").addEventListener('click', mostrarDesencriptacion);
