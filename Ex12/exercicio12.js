window.onload=function(){
    var num_secreto;
    var tentativas=0;
    var div_msg = document.getElementById("msg");
    var campo_dica = document.getElementById("txtdica");

    num_secreto = sortearNumero();

    document.getElementById("botao").onclick = function(){
        tentativas ++;
        var num_chute = parseInt(document.getElementById("txtchute").value);
        if (num_chute < num_secreto){
            campo_dica.value = "O número sorteado é maior.";
        }else if (num_chute > num_secreto){
            campo_dica.value = "O número sorteado é menor.";
        }else{
            campo_dica.value = "<h1> Parabéns!!! Você conseguiu em " + tentativas + "tentativas </h1>" +
            "<h3> Pressione F5 para jogar novamente </h3>"
        }
    }
}

function sortearNumero(){
    return Math.round(Math.random()*100);
}