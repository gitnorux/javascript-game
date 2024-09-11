
window.onload=function(){
    document.getElementById('loader').style.display="none";
    document.getElementById('preloader').style.display="block";
      }
    
    
    window.addEventListener("load",function(){
      setTimeout(
        function open(event){
          document.querySelector(".popup").style.display="block";
    
        },2000 )});
    
    document.querySelector("#close").addEventListener("click",function(){
    
    document.querySelector(".popup").style
    .display="none";
    
    });
    
    
    