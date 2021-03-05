window.onload=function(){
    document.getElementById("botao").onclick=function(){
        var num1 = parseInt(document.getElementById("valor1").value);
        var num2 = parseInt(document.getElementById("valor2").value);
        if (num1 > num2){
            alert("O primeiro valor é o maior");
        } else if (num2 > num1){
            alert("O segundo valor é o maior");
        } else{
            alert("Os números são iguais");
        }
    }
}