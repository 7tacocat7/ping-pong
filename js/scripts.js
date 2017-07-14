// user interfsce logic


// loads document
$(document).ready(function(){
  // gets imput from form under the footer id and appends variable umber to the  class user1
  $("#footer form").submit(function(event) {
    $(".user1").append("<li>"+number+"</li>"+"<br>");
    // assigns the variable number = to the value of the imput of the form
      var number = $("input#input1").val();
      var rangeinput = .parsInt(number)
    // prevents the document from refreshing
    event.preventDefault();
    var userinput = "#"
    $(".user1").show();
  });
});
