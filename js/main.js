
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}



var elButton = document.querySelector(".buttonmenu")
var elBoxContent = document.querySelector(".buttonmenucheck")


elButton.addEventListener("click", function(){
  elBoxContent.classList.toggle("box__content--open")
});



// KEBAB CASE =>  background-color-red
// SNAKE CASE => background_color_red
// PASCAL CASE => BackgroundColorRed
// CAMEL CASE => backgroundColorRed