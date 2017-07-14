// user interfsce logic
$(document).ready(function(){
  $("#footer form").submit(function(event) {
    var number = $("input#input1").val();
    $(".user1").append("<ul><li>"+number+"</li></ul>"+"<br>");
    event.preventDefault();
    var userinput = "#"

  });
});
