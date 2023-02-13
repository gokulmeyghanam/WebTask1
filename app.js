// var x = document.querySelector(".child");
// for(var i=0; i<x; i++){
//     window.addEventListener('scroll',function(){
//         x[i].classList.add("demo")
//     });
// }


let boxes = document.querySelectorAll('.item');
let flexContainer = document.querySelector('.container');
window.addEventListener('scroll',function(){
  flexContainer.classList.add("show-item");
})