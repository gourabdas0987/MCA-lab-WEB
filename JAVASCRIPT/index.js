// //create reference to the fields and output
// var num1 = document.getElementsByClassName("num1");
// console.log(num1);
// var num2 = document.getElementById('num2');
// var output = document.getElementsByClassName('num3');

// //add an event listner to a button
// document.getElementById('calculate').addEventListener('click', function(){
//     //perform the calculation
//     var addition = (num1.value) + (num2.value);
//     // var substraction = ParseFloat(num1.value) -ParseFloat(num2.value);
//     // var multiplication = ParseFloat(num1.value)*ParseFloat(num2.value);
//     // var division = ParseFloat(num1.value)/ParseFloat(num2.value);

//     //create string display the results
//     var result = addition;
//                 // 'Subtraction:'+substraction+'<br>'+
//                 // 'Multiplication'+multiplication+'<br>'+
//                 // 'Division'+division;
//     //display the results in the element with id= output element
//     document.getElementById('output').innerHTML = result;
//     console.log(result);

// })


function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  var addition = num1 + num2;
  var subtraction = num1 - num2;
  var multiplication = num1 * num2;
  var division = num1 / num2;

  var result = `
    Addition: ${addition} <br>
    Subtraction: ${subtraction} <br>
    Multiplication: ${multiplication} <br>
    Division: ${division}
  `;

  document.getElementById('output').innerHTML = result;
}