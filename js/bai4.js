document.getElementById("b4").onclick=function(){
    var x = Number(document.getElementById("canh1").value);
    var y = Number(document.getElementById("canh2").value);
    var z = Number(document.getElementById("canh3").value);
    var tamGiac = document.getElementById("p4");
    if( x == y && y == z){
        tamGiac.innerHTML = "Đây là tam giác đều";
    } else if( x == y || x == z || y == z){
        tamGiac.innerHTML = "Đây là tam giác cân";
    } else if( x*x + y*y == z*z || x*x + z*z == y*y || y*y + z*z == x*x){
        tamGiac.innerHTML ="Đây là tam giác vuông";
    } else{
        tamGiac.innerHTML ="Đây là tam giác thường";
    }
}