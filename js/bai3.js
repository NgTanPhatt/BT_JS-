docdocument.getElementById("b3").onclick = function(){
    var a = Number(document.getElementById("so1").value);
    var b = Number(document.getElementById("so2").value);
    var c = Number(document.getElementById("so3").value);
    var kQua = document.getElementById("p3");
    if(a % 2 == 0 && b % 2 == 0 ){
        if(c%2 == 0){
            kQua.innerHTML ="Cả 3 đều là số chẵn";
        } else {
            kQua.innerHTML ="Có 1 số lẻ và 2 số chẵn";
        }   
    } else if (a % 2 == 0 && c % 2 == 0){
        if(b%2 == 0){
            kQua.innerHTML ="Cả 3 đều là số chẵn";
        } else {
            kQua.innerHTML ="Có 1 số lẻ và 2 số chẵn";
        }  
    } else if (b % 2 == 0 && c % 2 == 0){
        if(a%2 == 0){
            kQua.innerHTML ="Cả 3 đều là số chẵn";
        } else {
            kQua.innerHTML ="Có 1 số lẻ và 2 số chẵn";
        }  
    } else if (a % 2 != 0 && b % 2 != 0){
        if(c%2 != 0){
            kQua.innerHTML ="Cả 3 đều là số lẻ";
        } else {
            kQua.innerHTML ="Có 2 số lẻ và 1 số chẵn";
        } 
    } else if (a % 2 != 0 && c % 2 != 0){
        if(b%2 != 0){
            kQua.innerHTML ="Cả 3 đều là số lẻ";
        } else {
            kQua.innerHTML ="Có 2 số lẻ và 1 số chẵn";
        } 
    } else if (b % 2 != 0 && c % 2 != 0){
        if(a%2 != 0){
            kQua.innerHTML ="Cả 3 đều là số lẻ";
        } else {
            kQua.innerHTML ="Có 2 số lẻ và 1 số chẵn";
        } 
    } else{
        kQua.innerHTML ="Cả 3 đều là số lẻ";
    }
}
