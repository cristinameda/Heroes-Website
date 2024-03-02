document.getElementById("form1").onsubmit = function () {
  let result = 0;
  for(let i=1;i <= 10; i++) {
    result += parseInt(
      document.querySelector(`input[name = "q${i}"]:checked`).value);
  }
  // q1 = parseInt(
  //   document.querySelector('input[name = "q1"]:checked').value
  // );
  // q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
  // q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
  // q4 = parseInt(
  //   document.querySelector('input[name = "q4"]:checked').value
  // );
  // q5 = parseInt(
  //   document.querySelector('input[name = "q5"]:checked').value
  // );
  // q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);
  // q7 = parseInt(document.querySelector('input[name = "q7"]:checked').value);
  // q8 = parseInt(
  //   document.querySelector('input[name = "q8"]:checked').value
  // );
  // q9 = parseInt(document.querySelector('input[name = "q7"]:checked').value);
  // q10 = parseInt(
  //   document.querySelector('input[name = "q8"]:checked').value
  // );

  document.getElementById("grade").innerHTML = result;

  let result2="";

  if (result == 0) {
    result2 = "I don't think you watched the series.";
  }
  if (result == 20) {
    result2 = "You're not really a fan.";
  }
  if (result == 50) {
    result2 = "You didn't pay too much attention to the show!";
  }
  if (result == 70) {
    result2 = "Not bad, you like the show, but is not your favourite.";
  }
  if (result == 100) {
    result2 = "A true fan!";
  }
  document.getElementById("grade2").innerHTML = result2;

  return false; // required to not refresh the page; just leave this here
}; //this ends the submit function
