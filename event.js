function clicked(){
    console.log("the button was clicked")
}
window.onload=function(){
    console.log("document was Loaded")
}
firstContainer.addEventListener('click',function(){
    console.log("clicked")
})

firstContainer.addEventListener('mouseover',function(){
    console.log("clicked")
})