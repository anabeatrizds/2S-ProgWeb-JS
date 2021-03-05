window.onload=function(){
    document.getElementById("botao").onclick = function(){
        calcular();
    }
}

function calcular(){
    var campo_base = document.getElementById("base");
    var campo_altura = document.getElementById("altura");
    var campo_area = getElementById("area");

    var base = parseInt(campo_base.value);
    var altura = parseInt(campo_altura.value);
    var resultado = base + altura;

    campo_area.value = resultado;
}

