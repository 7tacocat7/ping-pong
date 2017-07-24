



$(document).ready(function(){
  $("#footer form").submit(function(event) {
     $(".user1").empty();

var inputnumber = parseInt($("input#input1").val());
//defines the variable inputnumber for use in buisness logic^
//start of buisness logic
var start = 0;
//start of the count^


var numbers = [];
//creates empty array to store the number count^
for (var i = start; i < inputnumber+1; i++) {
    numbers.push(i);
}
// counts up to the input number and pushes values to array^
var pingpong = numbers.map(function(number) {
  if (number === 0){
      return number;
   }
      else if (number%5 === 0 && number%15 === 0){
      return "ping-pong";
      }
   else if (number%5 === 0){
      return "pong";
      }
      else if (number%3 === 0){
         return "ping";
         }
   else {
   return number;
      }
});
//creates a loop  that replaces values (divisible by 3,5,15) with the strings 'ping' 'pong' and 'pingpong' and places values in a new array called pingpong^


// end of buisness logic
  var userInput = $("input#input1").val();
  // takes input val from ui
    // alert(userInput);
    // alert(pingpong);

  var number = parseInt($("input#input1").val());
      if (isNaN(number)){
        alert("Please enter a number value!");
      }
      //alerts user if input is not a number
  pingpong.forEach(function(number){
    $(".user1").append("<li>"+number+"</li>"+"<br>");
  })
//appends each element of the array pingpong to a list within the page and seperates each item with a page break

    $("span.user1").children("li").click(function() {
      $(this).remove();
    });
    // removes appended list items when clicked^
    $(".user1").show();
    //shows list items after submit button has been pushed^
    event.preventDefault();
  });

});
