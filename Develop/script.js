// Assignment Code
var generateBtn = document.querySelector("#generate");

var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var spl = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var splArr = spl.split("");

// Write password to the #password input
function writePassword() {
    var password = "";
    var passwordText = document.querySelector("#password");
    
    password.value = passwordText;
    
    var passlength = prompt("How many characters would you like your password to be?");
  
      if(passlength <8 || passlength > 128){
          alert("The password needs to be between 8 and 128 characters long! Please start over.");
      }
      else{
        if(confirm("Would you like your password to contain upper case letters?")){
            Array.prototype.push.apply(passwordText, abcUpperArr);
        }
        if(confirm("Would you like your password to contain lower case letters?")){
            Array.prototype.push.apply(passwordText, abcLowerArr);
        }
        if(confirm("Would you like your password to contain numbers?")){
            Array.prototype.push.apply(passwordText, numArr);
        }
        if(confirm("Would you like your password to contain symbols?")){
            Array.prototype.push.apply(passwordText, splArr);
        }
        if(passwordText.length===0){
            alert("You must select at lease 1 type of characters to generate a password! Please start over.");
        }
        else{
          for(var i=0; i<passlength; i++){
              var random = Math.floor(Math.random()*passwordText.length);
              password += passwordText[random];
          }
        }
      }
  
    document.getElementById("password").innerHTML= password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
