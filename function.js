var special = false;
var num = false;
var low = false;
var up = false;

document.addEventListener("DOMContentLoaded", function(event) {
    var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(" ,")", "_", "=", "+", "/", "-", ";", "[", "]", "|"];
    
    var numericCharacters = [0,1,2,3,4,5,6,7,8,9];
    
    var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var pwLength;
    var randomPW=("");
    var pool = [];

    document.getElementById("generate").addEventListener("click", function() {
        initialize();
      });

    initialize = ()=>{
        var pwLengthTemp = parseInt(
            prompt ("How many characters would you like for your password?"));
        if (Number.isInteger(pwLengthTemp) && pwLengthTemp < 129 && pwLengthTemp > 7){
                pwLength=pwLengthTemp;
                console.log("Your length is ", pwLength);
        } else {
            alert("You didn't listen!");
            initialize();
        }

    var special = confirm("Would you like to include special characters?");
    var num = confirm(" Would you like to include numbers?");
    var up = confirm(" Would you like to include uppercase characters?");
    var low = confirm(" Would you like to include lowercase characters?");
    
    if (special || num || low || up){
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
        generatePw(pwLength, pool);
      } else{
        alert("Please select yes on at least one!");
        initialize();
    }
};

generatePw = (a, b) => {   
    for (var i = 0; i < a; i++){
        randomPW += b[Math.floor(Math.random() *b.length)];
    }

    document.getElementById('pwBox').innerHTML = "<h1>"+randomPW;

  };
});