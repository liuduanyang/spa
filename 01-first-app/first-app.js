var myHight=document.getElementById("hight");
var myWidth=document.getElementById("width");
var zc=document.getElementById("zc");
var mj=document.getElementById("mj");
var tip1=document.getElementById("tip1");
var tip2=document.getElementById("tip2");

function a(){
    if(!myHight.value){
        tip1.style.display="block";
    }else{
        tip1.style.display="none";
    }
}

myHight.oninput=a;

myHight.onblur=a;

function b(){
    if(!myWidth.value){
        tip2.style.display="block";
    }else{
        tip2.style.display="none";
    }
}

myWidth.oninput=b;

myWidth.onblur=b;

var js=document.querySelector(".js");

js.onclick=function(){
    zc.value=myWidth.value*2+myHight.value*2;
    mj.value=myWidth.value*myHight.value;
}