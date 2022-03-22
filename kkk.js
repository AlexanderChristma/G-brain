var box = document.getElementById("box");
var button = document.getElementById("show-more");

button.onclick=function(){
if(box.className="open"){
    box.className="";
    button.innerHTML= "show more";
}else{
    box.className="open";
    button.innerHTML="show less";
}
}
console.log("hsjns,");
