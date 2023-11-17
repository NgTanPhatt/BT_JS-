document.getElementById("b2").onclick= function(){
    var B = 1;
    var M = 2;
    var A = 3;
    var E = 4;
    var i = Number(document.getElementById("bai2").value);
    var ketQua =document.getElementById("p2");
    if(i == B){
        ketQua.innerHTML ="Xin Chào Bố";
    } else if( i == 2){
        ketQua.innerHTML ="Xin Chào Mẹ";
    } else if( i == 3){
        ketQua.innerHTML ="Xin Chào Anh";
    } else if( i == 4){
        ketQua.innerHTML ="Xin Chào Em";
    } else{
        alert('vui lòng nhập lại')
    }
}