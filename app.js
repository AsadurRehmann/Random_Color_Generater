let btn=document.querySelector("button");
let h3=document.querySelector("h3");
let div=document.querySelector("div");
let rgb;

btn.addEventListener("click",function(){
    console.log("bdd");
    h3.innerText=randomColor();
    div.style.backgroundColor=randomColor();
});

let randomColor=function (){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    rgb=`rgb(${red},${green},${blue})`;
    return rgb;
}
