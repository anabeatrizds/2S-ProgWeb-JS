var num1, num2;

window.onload = function(){
    document.getElementById("btnsoma").onclick = calcSoma;
    document.getElementById("btnsub").onclick = calcSub;
    document.getElementById("btnmult").onclick = calcMult;
    document.getElementById("btndiv").onclick = calcDiv;
}

function lerNumeros(){
    num1 = parseFloat(document.getElementById("txtnum1").value);
    num2 = parseFloat(document.getElementById("txtnum2").value);
}

function mostrarResultado(res){
    document.getElementById("txtresult").value = res;
}

function calcSoma(){
    lerNumeros();
    mostrarResultado(num1+num2);
}

function calcSub(){
    lerNumeros();
    mostrarResultado(num1-num2);
}

function calcMult(){
    lerNumeros();
    mostrarResultado(num1*num2);
}

function calcDiv(){
    lerNumeros();
    mostrarResultado(num1/num2);
}