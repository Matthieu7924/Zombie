'use strict';




document.addEventListener('DOMContentLoaded', function () {

let zombie= document.getElementById('zombietomb')

zombie.style.backgroundImage="url('./js/zombie.png')";


// let right =100px
// let  top =0px

let x = 0

function defile(){
    x = x -100
console.log(x)
    zombie.style.backgroundPosition = `${x}px 0`;
   
    setTimeout(()=>{
        let animationID = window.requestAnimationFrame(defile);
    },200)
}
window.requestAnimationFrame(defile);


// bgimg.style.transform = `translate(150px, 0px)`
// let animationID = window.requestAnimationFrame(defile);
// // id = requestAnimationFrame(animzombie);
// // window.requestAnimationFrame(animzombie)
// // bgimg.style.position= right 100px;
// // window.requestAnimationFrame(animzombie)

})
