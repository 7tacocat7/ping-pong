// Business logic
var numberarray =[]
for (i = 0; i <=number;i++) {
  numberarray.push(i);
}


// user interfsce logic
var blankArray =[] ;


// loads document
$(document).ready(function(){
  $("#footer form").submit(function(event) {


    // user interfsce logic
    var number = $("input#input1").val();
    $(".user1").append("<li>"+number+"</li>"+"<br>");
    $("span.user1").children("li").click(function() {
      $(this).remove();
    });
    // assigns the variable number = to the value of the imput of the form
      // var number = $("input#input1").val();
      // var rangeinput = .parsInt(number);
    // prevents the document from refreshing
    var numberArray = blankArray.push(number);
    event.preventDefault();
    var userinput = "#"
    $(".user1").show();
  });
});
