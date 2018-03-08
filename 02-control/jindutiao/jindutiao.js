let start=document.getElementById('start');
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let jdt=document.getElementById("jdt");
let timer;

start.onclick=function(){
    timer=setInterval(function(){
        jdt.value+=1;
        if(jdt.value==100){
            clearInterval(timer);
        }
    },100)
}

stop.onclick=function(){
    clearInterval(timer);
}

reset.onclick=function(){
    clearInterval(timer);
    jdt.value=0;
}