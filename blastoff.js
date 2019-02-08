var countdownGenerator = function(x) {
    var number = x

    return function realFunction() {
    if(number > 0) {
        console.log("T-minus " + number + "...");
        number -= 1;
    } else if(number === 0) {
        console.log("Blast Off!");
        number -= 1;
    } else {
        console.log("Rockets already gone, bub!");
    }
  }
}
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!