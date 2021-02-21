"use strict"


const icono = document.querySelector(".fas")
const nav = document.querySelector(".nav")

icono.addEventListener("click",function(){
    nav.classList.toggle("ver")

})



// Cuando hago click en .miniatura, .lightbox cambie display: flex
$('.img').click( ()=>{
    $('.lightbox').css({ 'display' : 'flex' })
  })
  
  
  // Cuando hago click .fa-times, .lightbox cambie display: none
  $('.fa-times').click( ()=>{
    $('.lightbox').css({ 'display' : 'none '})
  })