// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength = prompt("How many characters would you like in your password?")
var lowerCaseChar = confirm("would you like lower case letters?")
var upperCaseChar = confirm("would you like upper case letters?")
var numberCaseChar = confirm("would you like numbers?")
var specialCaseChar = confirm("would you like special characters?")


// define input from prompt to use later
//var lengthEl = pwLength
if (pwLength < 8){
  pwLength = prompt("Your password needs atleast 8 characters. Enter again.")
}

//create event listener for when the button is clicked
generateBtn.addEventListener("click", () =>{
//define that when confirming charater types they are added to master string
  if (lowerCaseChar == true){
    lowerCharSet = "abcdefghijklmnopqrstuvwxyz"
 
  }
  if (lowerCaseChar == false){
    lowerCharSet = ""
 
  }
  if (upperCaseChar == true){
    upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (upperCaseChar == false){
    upperCharSet = ""
  }
 if (numberCaseChar == true){
    numberCharSet = "0123456789"
  }
  if (numberCaseChar == false){
    numberCharSet = ""
  }
  
  if (specialCaseChar == true){
    specialCharSet = "，．：；！？＂＇｀＾～￣＿＆＠＃％＋－＊＝＜＞（）［］｛｝｟｠｜￤／＼￢＄"
  }
  if (specialCaseChar == false){
    specialCharSet = ""
  }
  
  //define master string based confirmations
  let charSet = (lowerCharSet + upperCharSet + numberCharSet + specialCharSet)
 //define initial output to text area and reset so pw doesn't compound
 let pw = "";
// loop that runs the length of input value and then adds a character from master string
 for(var i = 0; i < pwLength; i ++){
   pw = pw + charSet.charAt(Math.floor(Math.random() * Math.floor(charSet.length - 1)));
 }
//prints password to text area once the loop has finished
 document.getElementById("password").value = pw;

})























