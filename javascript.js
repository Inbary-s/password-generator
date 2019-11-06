document.addEventListener("DOMContentLoaded", function(event) {
    var specialCharacters = [
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "=",
      "+",
      "/",
      "-",
      ";",
      "[",
      "]",
      "|"
    ];
    var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var upperCaseCharacters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    var lowerCaseCharacters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    var pool = [];
    var pwLength;
    var randomPW = "";
  
    document.getElementById("generate").addEventListener("click", function() {
      initialize();
    });
  
    //   document.getElementById("copy").addEventListener("click", function() {
    //     var copyText = document.getElementById("pwBox");
  
    //     /* Select the text field */
    //     copyText.select();
  
    //     /* Copy the text inside the text field */
    //     document.execCommand("copy");
  
    //     /* Alert the copied text */
    //     alert("Copied the text: " + copyText.value);
    //   });
  
    initialize = () => {
      var pwLengthTemp = parseInt(
        prompt(
          "How many characters would you like for your password? (Please choose between 8-128)"
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
        alert("You didn't listen!");
        initialize();
      }
      var special = confirm("Would you like to include a special character?");
      var num = confirm("Would you like to include a number?");
      var low = confirm("Would you like to include a lowercase letter?");
      var up = confirm("Would you like to include an uppercase letter?");
      if (special || num || low || up) {
        if (special) {
          pool = pool.concat(specialCharacters);
          if (num) {
            pool = pool.concat(numericCharacters);
            if (low) {
              pool = pool.concat(lowerCaseCharacters);
              if (up) {
                pool = pool.concat(upperCaseCharacters);
              }
            }
          }
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
      var node = document.createElement("input");
      var textnode = document.createTextNode(randomPW);
      node.appendChild(textnode);
      document.getElementById("pwBox").appendChild(node);
    };
  
    document.getElementById("copy").addEventListener("click", function() {
      var copyText = document.getElementById("pwBox");
      /* Select the text field */
      console.log(copyText.childNodes[0]);
      copyText.childNodes[0].select();
      document.execCommand("copy");
      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
    });
  });
  
  // var copyText = document.getElementById("myInput");
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);
  // document.execCommand("copy");
  // alert("Copied the text: " + copyText.value);
  