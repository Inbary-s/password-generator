document.addEventListener("DOMContentLoaded", function(event) {
    var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","_","=","+","/","-",";","[","]","|"];
    var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j", "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var pool = [];
    var pwLength;
    var randomPW = "";
    
    document.getElementById("generate").addEventListener("click", function() {
      initialize();
    });
    initialize = () => {
      randomPW=[];
      var pwLengthTemp = parseInt(
        prompt(
          "How many characters would you like for your password?  A good password is at least 8 characters and at a maximum of 128 characters"
          )
          );
          if (
        Number.isInteger(pwLengthTemp) &&
        pwLengthTemp < 129 &&
        pwLengthTemp > 7
        ) {
          pwLength = pwLengthTemp;
        console.log("Your length is ", pwLength);
      } else {
        alert("You didn't listen! Let's start again!");
        initialize();
      }
      var special = confirm("Would you like to include a special character?");
      var num = confirm("Would you like to include a number?");
      var low = confirm("Would you like to include a lowercase letter?");
      var up = confirm("Would you like to include an uppercase letter?");
      if (special || num || low || up) {
        if (special) {
          pool = pool.concat(specialCharacters);
        }
        if (num) {
          pool = pool.concat(numericCharacters);
        }
        if (low) {
          pool = pool.concat(lowerCaseCharacters);
        }
        if (up) {
          pool = pool.concat(upperCaseCharacters);
        }
        console.log(pool);
        generatePW(pwLength, pool);
      } else {
        alert("Please select yes on at least one!");
        initialize();
      }
    };
    
    generatePW = (a, b) => {
      for (var i = 0; i < a; i++) {
        randomPW += b[Math.floor(Math.random() * b.length)];
      }
      var node = document.createElement("h1");
      var textnode = document.createTextNode(randomPW);
      node.appendChild(textnode);
      document.getElementById("pwBox").appendChild(node);
      
      document.getElementById("copy").addEventListener("click", function() {    
        var text = randomPW;
        navigator.clipboard.writeText(text).then(function() {
          console.log('Async: Copying to clipboard was successful!');
          alert("Your password has been copied to your clipboard! Keep it somewhere safe!");
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
          alert("oops, something went wrong...");
        });
      })};
    })
    
  //   document.getElementById("generate").addEventListener("click", function(){
  //     clearContent();
  //     clearContent() => {      
  //     function clearContent(pwBox) { 
  //       document.getElementById(pwBox).innerHTML = ""; 
  //     }
  //   };
  // });
  //   clearContent();