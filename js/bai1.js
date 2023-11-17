// b1
document.getElementById("b1").onclick = function(){
    var so1 = Number(document.getElementById("s1").value);
    var so2 = Number(document.getElementById("s2").value);
    var so3 = Number(document.getElementById("s3").value);
    var Kq = document.getElementById("p1");
    if (so1 > so2 && so1 > so3){
        if(so2 > so3){
            Kq.innerHTML ="so3 , so2, so1";
        }
            else{
                Kq.innerHTML ="so2 , so3, so1";
            }
        }
        else if(so2 > so3 && so2 > so1){
            if(so1 > so3){
                Kq.innerHTML ="so3 , so1, so2";
            }
            else{
                Kq.innerHTML ="so1 , so3 , so2";
            }
        }
        else if(so3 > so1 && so3 > so2){
            if(so1 > so2){
                Kq.innerHTML ="so2, so1, so3";
            }
            else{
                Kq.innerHTML ="so1, so2, so3";
            }
        }
    }
