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
