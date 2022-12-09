//Reference HTML
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const slider = document.querySelector('.slider')
const carousel = document.querySelector('.carousel')

let sectionIndex = 0

//Reset
function reset(){
    for (i=0;i<slider.children.length;i++){
        slider.children[i].style.zIndex = 0
        slider.children[i].style.opacity = 0
    }
}

//Slideshow
let intervalId
function startShow() {
    intervalId = setInterval(function() {
        reset()
        sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 0
        slider.children[sectionIndex].style.zIndex = 1
        slider.children[sectionIndex].style.opacity = 1
    }, 3000)
}
startShow()
carousel.addEventListener('mouseover', function(){
    clearInterval(intervalId)
})

carousel.addEventListener('mouseout', function(){
    startShow()
})

//Button Click
next.addEventListener('click', function(){
    reset()
    sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 0
    slider.children[sectionIndex].style.zIndex = 1
    slider.children[sectionIndex].style.opacity = 1
})

prev.addEventListener('click', function(){
    reset()
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 4
    slider.children[sectionIndex].style.zIndex = 1
    slider.children[sectionIndex].style.opacity = 1
})