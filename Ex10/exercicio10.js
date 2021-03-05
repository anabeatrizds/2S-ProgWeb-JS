window.onload = function(){
    var btn = document.getElementById("botao");
    btn.onclick = function(){
        var num = parseInt(document.getElementById("txtnum").value);
        var fat = 1;
        for (var i=1; i <= num; i++){
            fat = fat + i;
        }
        document.getElementById("txtfat").value = fat;
    }
}