function insert(n) {
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + n;
 }
 
 function clean() {
document.getElementById('resultado').innerHTML = "";
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}