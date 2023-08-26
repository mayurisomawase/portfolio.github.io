$(document).ready(function(){
    $('.color').owlCarousel({
        loop:true,
        margin:20,
        autoplayTimeout:2000,
        autoplay:true,

    })
})

let i=0;
function phenol(){
  if(i===0){
    document.getElementById("list").style.display="block";
    document.getElementById("list").style.width="100%";
    
    i++;
  }else{
    document.getElementById("list").style.display="none";
   document.getElementById("list").style.width="0px";
    i--;
  }
  
}