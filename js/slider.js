var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex+=n);
}

function showSlides(n){
  var i;
  var slides=document.getElementsByClassName("mySlides");

  // never-end loop
  if(n>slides.length){
    slideIndex=1;
  }
  if(n<1){
    slideIndex=slides.length;
  }


  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }

  slides[slideIndex-1].style.display="block";

}

var divs = $('div[id^="text-"]').hide(),
    i = 0;

(function cycle() {

    divs.eq(i).fadeIn(400)
              .delay(1000)
              .fadeOut(400, cycle);

    i = ++i % divs.length;

})();
