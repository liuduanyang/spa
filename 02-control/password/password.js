let see=document.getElementById("see");
let pw=document.getElementById("pw");
let but=false;

see.onclick=function(){
    if(but==false){
        see.src="./eye.png";
        pw.type="text";
        but=!but;
    }
    else{
        see.src="./eye-close.png";
        pw.type="password";
        but=!but;
    }
}