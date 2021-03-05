window.onload=function(){
    document.getElementById("botao").onclick=function(){
        calcularImposto();
    }
}

function calcularImposto(){
    var salario = parseFloat(document.getElementById("txtsalario").value);
    var imposto = "";
    if (salario <= 1434){
        imposto = "0% (isento)";
    }else if (salario > 1434 && salario <= 2150){
        importo = salario * 0.075;
    }else if (salario > 2150 && salario <= 2866){
        imposto = salario * 0.15;
    }else if (salario > 2866 && salario <= 3582){
        imposto = salario * 0.225;
    }else{
        imposto = salario * 0.275;
    }
    document.getElementById("txtimposto").value = imposto;
}