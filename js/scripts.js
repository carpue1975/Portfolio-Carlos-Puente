$.fn.extend({
  animateCss: function (animationName, callback) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
      if (callback) {
        callback();
      }
    });
    return this;
  }
});

$('.animated-item').hover(function(){
  $(this).animateCss('shake');
});

var button = document.querySelector("h3");
var element = document.querySelector(".left");
var buttonRight = document.querySelector("h2");
var elementRight = document.querySelector(".rigth");




button.addEventListener("click", function(){
  element.classList.toggle("left-down");
  console.log('button was clicked');
});
buttonRight.addEventListener("click", function(){
  elementRight.classList.toggle("rigth-down");
  console.log('button was clicked rrrrrrrr');
});

function myFunction() {
   var element = document.getElementById("myDIV");
   element.classList.remove("left-down");
}
function myFunctionRight() {
   var element2 = document.getElementById("myDiv");
   element2.classList.remove("rigth-down");
}
