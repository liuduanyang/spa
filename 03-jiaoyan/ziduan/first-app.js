var myHight=document.getElementById("hight");
var myWidth=document.getElementById("width");
var zc=document.getElementById("zc");
var mj=document.getElementById("mj");
var tip1=document.getElementById("tip1");
var tip2=document.getElementById("tip2");
var tip3=document.getElementById("tip3");
var tip4=document.getElementById("tip4");

window.onload=function(){
    myHight.focus();
}

// myHight.onblur=function(){
//     console.log(1);
//     if(!myHight.value){
//         myHight.focus();
//     }
// }

function a(){
    if(!myHight.value){
        tip1.style.display="block";
        myHight.focus();
    }else{
        tip1.style.display="none";
    }
    
    // if(typeof(myHight.value)!==Number || myHight.value<0){
    //     tip3.style.display="block";
    //     myHight.focus();
    // }else{
    //     tip3.style.display="none";
    // }
}

myHight.oninput=a;

myHight.onblur=a;

function b(){
    if(!myWidth.value){
        tip2.style.display="block";
        myWidth.focus();
    }else{
        tip2.style.display="none";
    }
}

myWidth.oninput=b;

myWidth.onblur=b;

var js=document.querySelector(".js");

function FloatZc(arg1,arg2){  
    var r1,r2,m; 
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}; //参数1为整数}; 
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0;} //参数2为整数};
    m=Math.pow(10,Math.max(r1,r2));  //取其中较大的位数
    return (arg1*m*2+arg2*m*2)/m;   //先将arg1和arg2转换为整数进行计算，然后再转换回浮点数
} 

function FloatMj(arg1,arg2){  
    var r1,r2,m; 
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}; //参数1为整数}; 
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0;} //参数2为整数};
    m=Math.pow(10,Math.max(r1,r2));  //取其中较大的位数
    return (arg1*m*arg2*m)/(m*m);   //先将arg1和arg2转换为整数进行计算，然后再转换回浮点数
} 

js.onclick=function(){
    var result1 = (myWidth.value.toString()).indexOf(".");
    var result2 = (myHight.value.toString()).indexOf(".");
    if(result1 != -1 || result2 != -1) {
        zc.value=FloatZc(myWidth.value,myHight.value);
        mj.value=FloatMj(myWidth.value,myHight.value);
        return;
    } 
    zc.value=myWidth.value*2+myHight.value*2;
    mj.value=myWidth.value*myHight.value;
}