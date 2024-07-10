document.getElementById('textoCopiado').addEventListener('click', function () {
    let cadenaIngresada = document.getElementById("mostrarTexto").value;    
    const texto = cadenaIngresada;

    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles:', texto);
        alert(`texto copiado ${texto}`);
    }).catch(err => {
        console.error('Error al copiar al portapapeles:', err);
    });
});
