"use strict"


const icono = document.querySelector(".fas")
const nav = document.querySelector(".nav")

icono.addEventListener("click",function(){
    nav.classList.toggle("ver")

})


const foto = document.querySelector(".img")
const grande = document.querySelector(".lightbox")
const equis = document.querySelector(".fas.fa-times")

foto.addEventListener("click",function(){
    grande.classList.toogle("ver")

} )

$('.article').click( ()=>{
    $('.lightbox').css({ 'display' : 'flex' })
  })
  
  
$('.fas.fa-times').click( ()=>{
    $('.lightbox').css({ 'display' : 'none '})
})