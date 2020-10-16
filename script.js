// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = prompt("How many characters would you like in your password?")
var lowerCaseChar = confirm("would you like lower case letters?")
var upperCaseChar = confirm("would you like upper case letters?")
var numberCaseChar = confirm("would you like numbers?")
var specialCaseChar = confirm("would you like special characters?")
var resultEl = document.querySelector("Generated Password")


var lengthEl = pwLength



generateBtn.addEventListener("click", () =>{

  if (lowerCaseChar == true){
    lowerCharSet = "abcdefghijklmnopqrstuvwxyz"
  }
  if (upperCaseChar == true){
    upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
 if (numberCaseChar == true){
    numberCharSet = "0123456789"
  }
  if (specialCaseChar == true){
    specialCharSet = "，．：；！？＂＇｀＾～￣＿＆＠＃％＋－＊＝＜＞（）［］｛｝｟｠｜￤／＼￢＄"
  }
  
  let charSet = (lowerCharSet + upperCharSet + numberCharSet + specialCharSet)
 
 let pw = "";

 for(var i = 0; i < lengthEl; i ++){
   pw = pw + charSet.charAt(Math.floor(Math.random() * Math.floor(charSet.length - 1)));
 }

 document.getElementById("password").value = pw;

})





console.log("This is a test");


















