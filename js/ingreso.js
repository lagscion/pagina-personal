
function comprobacion(){
let boton = document.getElementById('ingr');
let text = document.getElementById('text');
let cont = document.getElementById('cont')

boton.addEventListener('click', () => {
    var valor1 = text.value;
    var valor2 = cont.value;
    if (valor1 == "hola" && valor2 == "sapo" ){
        alert("ingreso");
        window.location.href = '../pages/admin.html'
    }
    else {alert("no entro");
        text.value=''
        cont.value=''
    }
    
}
)
}

document.getElementById('ingr').addEventListener('click', comprobacion);