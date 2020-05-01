/* go thru and make on/off classes to clean up code */

$("#nav-sub").hover(function() {
  $("#nav-icon").css("transform","rotate(90deg)");
  $("#nav-icon").css("background","black");
  $("#nav-icon").css("border-top-left-radius","50%");
  $("#nav-icon").css("border-bottom-left-radius","50%");
}, function() {
  $("#nav-icon").css("transform","rotate(0deg)");
  $("#nav-icon").css("background","none");
  $("#nav-icon").css("border-top-left-radius","0%");
  $("#nav-icon").css("border-bottom-left-radius","0%");
});

$("#nav-icon").hover(function() {
  $("#nav-icon").css("background","black");
  $("#nav-icon").css("color","white");
  $("#nav-icon").css("transform","rotate(90deg)");
  $("#nav-icon").css("border-top-left-radius","50%");
  $("#nav-icon").css("border-bottom-left-radius","50%");
  $("#nav-icon").css("transition","0.4s");
}, function() {
  $("#nav-icon").css("background","none");
  $("#nav-icon").css("color","grey");
  $("#nav-icon").css("transform","rotate(0deg)");
  $("#nav-icon").css("border-top-left-radius","0%");
  $("#nav-icon").css("border-bottom-left-radius","0%");
  $("#nav-icon").css("transition","0.4s");
})


/* figure out how to make this work 
$("#nav-icon").hover(function() {
  $(this).addClass("nav-icon-on")
}, function() {
  $(this).addClass("nav-icon-off")
})
*/

/* Copy Email Text */

/* set image easter egg */
function pfpHover() {
  $("#personal-thumbnail").attr("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1438993/PFPCurve.jpg")
};

function pfpUnHover() {
  $("#personal-thumbnail").attr("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1438993/PFPHoco.jpg")
};

// EXP --Go back and see if we can make currentSlide a reusable variable so no repeat
var slideCtnr = $("#slideshow-ctnr");
var slideItems = $("#slideshow-ctnr").children(".ss-obj");
var slideLength = slideCtnr.children(".ss-obj").length;

function updateSlide(pos) {
  pos += 1;
  $("#currentSlide").text(pos);
}

function slide_Start() {
  // init slideshow and hide all but first element
  for (let i = 1; i < slideItems.length;i++) {
    slideItems.eq(i).css("display", "none");
  };
  $("#slideAmount").html(slideLength);
  let currentSlide = slideCtnr.children(".ss-obj:visible");
  updateSlide(currentSlide.index(".ss-obj"));
};

// when running if/else and calc index, used class arg and numerical exp so didnt calc btns, purely for clarity as btns are not a ssElem

function nextSlide() {
  let currentSlide = slideCtnr.children(".ss-obj:visible");
  if (currentSlide.index(".ss-obj")+1 < slideLength) {
    currentSlide.next().show();
    currentSlide.hide();
  }
  else {
    slideItems.first().show();
    currentSlide.hide();
  };
  currentSlide = slideCtnr.children(".ss-obj:visible");
  updateSlide(currentSlide.index(".ss-obj"));
};

function lastSlide() {
  let currentSlide = slideCtnr.children(".ss-obj:visible");
  if (currentSlide.index(".ss-obj") > 0) {
    currentSlide.prev().show();
    currentSlide.hide();
  }
  else {
    slideItems.last().show();
    currentSlide.hide();
  };
  currentSlide = slideCtnr.children(".ss-obj:visible");
  updateSlide(currentSlide.index(".ss-obj"));
}

window.onload = slide_Start();