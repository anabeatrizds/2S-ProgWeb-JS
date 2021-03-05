window.onload = function(){
    document.getElementById("botao").onclick=function(){
        calcularMedia();
    }
}

function calcularMedia(){
    var nota1 = parseFloat(document.getElementById("txtnota1").value);
    var nota2 = parseFloat(document.getElementById("txtnota1").value);
    var nota3 = parseFloat(document.getElementById("txtnota1").value);
    var media = (nota1+nota2+nota3)/3;

    document.getElementById("txtmedia").value = media;
    document.getElementById("txtconceito").value = verificarConceito(media);
}

function verificarConceito(media){
    if (media >= 6){
        return "APROVADO";
    }else if (media >= 3 && media < 6){
        return "EXAME";
    }else{
        return "REPROVADA";
    }
}