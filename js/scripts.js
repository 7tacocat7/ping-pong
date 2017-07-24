//
// var number = userInput.parsInt();
// buisness logic
// var userInput = $("input#input1").val();
// var numericInput = parseInt(userInput);
// for (var index = 0; index <= userInput; index += 1) {
//     this.push(numberArray);
// }

// var countToInputNumber = function(count) {
//   var numberArray = [];
//   var number = parseInt($("input#input1").val());
//     for (var index = 0; index<= count; index ++){
//       if(index%3 === 0){
//         countToInputNumber.push("ping");
//       }
//       else if (index%5 ===0) {
//         countToInputNumber.push("pong");
//       }
//       else if (index%15 ===0){
//         countToInputNumber.push("pingpong");
//       }
//       else{
//         numberArray.push(index);
//       }
//     }
//     return numberArray;
// };
// var inputnumber = parseInt($("input#input1").val());
// var pingpongCount = function(count){
// var numbers = [];
//
//   for (var i =1; i<= count; i ++){
//     numbers.push(i);
//     return numbers;
//   };
// };




var start = 0;
var inputnumber = parseInt($("input#input1").val());
var numbers = [];
for (var i = start; i < inputnumber+1; i++) {
    numbers.push(1);
}

var pingpong = numbers.map(function(number) {
  if (number%5 === 0 && number%15 === 0){
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









  // user interfsce logic
// loads document

$(document).ready(function(){
  $("#footer form").submit(function(event) {
  var userInput = $("input#input1").val();
    alert(userInput)

  var number = parseInt($("input#input1").val());
      if (isNaN(number)){
        alert("Please enter a number value!");

      }
      else{
        var outcome = counters(number);
      }
      counters.forEach(function(number){
        $(".user1").append("<li>"+number+"</li>"+"<br>");

      })

    // removes appended list items when clicked
    $("span.user1").children("li").click(function() {
      $(this).remove();
    });
    $(".user1").show();
    event.preventDefault();
  });

});
