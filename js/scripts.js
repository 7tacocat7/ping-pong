//
// var number = userInput.parsInt();
// buisness logic
// var numberArray =[]
// var userInput = parseInt($("input#input1").val());
// for (var index = 0; index <= userInput; index += 1) {
//     this.push(numberArray);
// }

var countToInputNumber = function(count) {
  var numberArray = [];
    for (var index = 0; i<= count; i ++){
      if(index%3 === 0){
        countToInputNumber.push("ping");
      }
      else if (index%5 ===0) {
        countToInputNumber.push("pong")
      }
    }
}







  // user interfsce logic
// loads document

$(document).ready(function(){
  $("#footer form").submit(function(event) {
    var userInput = $("input#input1").val();
    $(".user1").append("<li>"+userInput+"</li>"+"<br>");
  forEach
    // removes appended list items when clicked
    $("span.user1").children("li").click(function() {
      $(this).remove();
    });
    $(".user1").show();
    event.preventDefault();
  });

});
