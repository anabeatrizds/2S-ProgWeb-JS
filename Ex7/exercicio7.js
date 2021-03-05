window.onload = function(){
    document.getElementById("botao").onclick = function(){
        calcularImc();
    }
}

function calcularImc(){
    var altura = parseFloat(document.getElementById("textaltura").value);
    var peso = parseFloat(document.getElementById("txtpeso").value);
    var imc = peso/(altura*altura);

    document.getElementById("txtimc").value = imc;

    var sexo = 0;
    if (document.getElementById("sexoM").checked){
        sexo = 1;
    }else if (document.getElementById("sexoF").checked){
        sexo = 2;
    }

    var mensagem = conceitoImc(imc, sexo);

    document.getElementById("txtcondicao").value = mensagem;
}

function conceitoImc(imc, sexo){
    var condicao="";
    if (sexo ==1){
        if (imc < 20.7){
            condicao = "abaixo do peso";
        }else if (imc >= 20.7 && imc < 26.4){
            condicao = "no peso normal";
        }else if (imc >= 26.4 && imc < 27.8){
            condicao = "marginalmente acima do peso";
        }else if (imc >= 27.8 && imc < 31.1){
            condicao = "acima do peso ideal";
        }
    }else{
        if (imc < 19.1){
            condicao = "abaixo do pesso";
        }else if (imc >= 19.1 && imc < 25.8){
            condicao = "no peso normal";
        }else if (imc >= 25.8 && imc < 27.3){
            condicao = "marginalmente acima do peso";
        }else if (imc >= 27.3 && imc < 32.3){
            condicao = "acima do peso ideal";
        }else{
            condicao = "obeso"
        }
    }

    return condicao;
}