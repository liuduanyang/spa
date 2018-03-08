let dsq=document.getElementById("dsq");
let t=8;
let timer=setInterval(function(){
    if(t==0){
        clearInterval(timer);
        dsq.value=`同意`;
        dsq.removeAttribute("disabled");
        return;
    }
    dsq.value=`同意(${t} s)`;
    t--;
},1000);
dsq.onclick=function(){
    alert("你已同意该协议");
}