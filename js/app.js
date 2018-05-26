document.addEventListener("DOMContentLoaded", function(event) {

// Slider

  // declare variables
  var slides = document.querySelectorAll('.demo');
  var prev = document.querySelector('.prevBtn');
  var next = document.querySelector('.nextBtn');
  var sliderIMG = document.querySelectorAll('.sliderImg');
  var slideIndex = 1;

  showDivs(slideIndex);

  // add event listeners
  for (var i = 0; i < slides.length; i++) {
   slides[i].addEventListener("click", function(){
     var t = Array.prototype.slice.call(slides);
     currentDiv((t.indexOf(this))+1);

   })
  }
  next.addEventListener("click", function(){
    nextDiv(1);
  })
  prev.addEventListener("click", function(){
    nextDiv(-1);
  })

  // declare functions
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  function nextDiv(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    var next = document.getElementsByClassName("nextBtn");
    var prev = document.getElementsByClassName("prevBtn");
    var i;
    var dots = document.getElementsByClassName("sliderMiniature");

    if (slideIndex <= 0) {
      prev[0].className += " notActive";
      slideIndex = 1;
      return;
    }
    prev[0].className = prev[0].className.replace("notActive", "");
    if ((slideIndex-1) >= x.length) {
      next[0].className += " notActive";
      slideIndex = x.length;
      return;
    }
    next[0].className = next[0].className.replace("notActive", "");


    if ((slideIndex) > 6) {
      var toHide = (slideIndex - 6);
      for (var i = 0; i < toHide; i++) {
        dots[i].classList = ["sliderMiniature hide"];
      }
    }

    if ( ((slideIndex) <= (x.length - 6) && (dots[slideIndex-1]).classList.contains("hide") )) {
      dots[slideIndex-1].classList = ["sliderMiniature"];
    }

    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace("opacityOff", "");
    }

    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " opacityOff";
  }


// Display date

  var date = new Date();
  document.getElementById("date").innerHTML = date.toDateString();


});
