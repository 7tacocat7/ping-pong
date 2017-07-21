//
// var number = $("input#input1").val();
// buisness logic
var numberArray =[]



// loads document
$(document).ready(function(){
  $("#footer form").submit(function(event) {

    alert(" thanks for submitting your number")

    // user interfsce logic
    var userInput = $("input#input1").val();
    $(".user1").append("<li>"+userInput+"</li>"+"<br>");
    $("span.user1").children("li").click(function() {
      $(this).remove();
      alert(" look! you removed a number")
    });

    $(".user1").show();
      alert(" you got to the end");
      event.preventDefault();
  });
});
