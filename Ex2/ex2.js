window.onload = function(){
    document.getElementById("botao").onclick=verificarNum
}

function varificarNum(){
    var num = parseInt(document.getElementById("valor").value);
    if (num % 2 == 0){
        alert("É par");
    } else{
        alert("É impar");
    }
}