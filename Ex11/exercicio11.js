window.onload = function(){
    document.getElementById("botao").onclick = function(){
        var num = parseInt(document.getElementById("txtnum").value);
        var soma=0;
        for (var i=1; i <= num; i++){
            soma = soma + i;
        }
        document.getElementById("txtresult").value = soma;
    }
}