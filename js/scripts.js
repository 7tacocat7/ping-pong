// user interfsce logic
$(document).ready(function(){
  $("#footer form").submit(function(event) {
    var number = $("input#input1").val();
    $(".user1").append("<li>"+number+"</li>"+"<br>");
    event.preventDefault();
    var userinput = "#"
    $(".user1").show();
  });
});
