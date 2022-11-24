var p,r,b= new Array;
p=[1,10,7];
r=[0,0,0];
b=0;
var win=0;
var str="";

function br(){
    document.write("<br>");
}


//랜덤값 출력
r[0] =Math.floor(Math.random()*10)+1;

//중복지우기
while(true){
    r[1] =Math.floor(Math.random()*10)+1;
    if(r[1] != r[0]){
        break;
    }
}

while(true){
    r[2] =Math.floor(Math.random()*10)+1;
    if(r[2] != r[0] && r[2] != r[1]){
        break;
    }
}

while(true){
    b =Math.floor(Math.random()*10)+1;
    if(b != r[0] && b != r[1] && b!=r[2]){
        break;
    }
}

for(var i=0; i<=3; i=i+1){
    for(var j=0; j<3; j=j+1){
            if(p[i]==r[j] ){
                    win=win+1;
              }
    }
 }



 switch(win){
    case 0:
        str ="0개 꽝"
        break;
    
    case 1:
        str="4등입니다.";
        break;
    
    case 2:
            str="3등입니다."
            //2등
            for(var i=0; i<3; i=i+1){
                if(b==p[i]){
                    str="2등입니다."
                }
            }break;
    
    case 3:
        str="1등입니다"
        break;


}





 document.write("내가 정한 숫자 :" +p);
 br();
 document.write("컴퓨터 값 : " +r[0]+" "+r[1]+" "+r[2]);
 br();
 document.write("보너스 값 : " +b);
 br();
 document.write(str);
 br();
 document.write("맞은 번호 갯수:"+win+"<br>");
 br();