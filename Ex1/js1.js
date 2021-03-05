window.onload = function(){
    document.getElementById("botao");onclick = function(){
        calcular();
    }
}

function calcular(){
    var valor = document.getElementById("valor");
    var parcelas = document.getElementById("parcelas");
    var resultado = document.getElementById("resultado");

    var valorcompra = parseFloat(valor.value);
    var qtdparcelas = parseInt(parcelas.value);

    var mensagem= "";
    var valorfinal = valorfinal;

    if (qtdparcelas == 1) {
        valorfinal = valorcompra;
        mensagem = "1X de R$" + valorfinal;
    }else if (qtdparcelas == 2){
        valorfinal = (valorcompra + (valorcompra * 0.03))/2;
        mensagem = "2X de R$" + valorfinal;
    }else{
        valorfinal = (valorcompra + (valorcompra * 0.07))/4;
        mensagem = "4X de R$" + valorfinal;
    }

    valor.value= "";
    resultado.value = mensagem;
}