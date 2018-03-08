let range=document.getElementById("range");
let show=document.getElementById("show");
range.onchange=function(){   
    show.innerHTML=`你的年龄是：${range.value}岁`
}