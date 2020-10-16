// Assignment Code
var generateBtn = document.querySelector("#generate");
//var characterSet="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ，．：；！？＂＇｀＾～￣＿＆＠＃％＋－＊＝＜＞（）［］｛｝｟｠｜￤／＼￢＄"
var pwLength = prompt("How many characters would you like in your password?")
//var lowerCaseChar = confirm("would you like lower case letters?")
//var upperCaseChar = confirm("would you like upper case letters?")
//var numberCaseChar = confirm("would you like numbers?")
//var specialCaseChar = confirm("would you like special characters?")
var resultEl = document.querySelector("Generated Password")

//DOM elements
var lengthEl = pwLength
var index = 0
generateBtn.addEventListener("click", () =>{
//function generator(){
 let charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ，．：；！？＂＇｀＾～￣＿＆＠＃％＋－＊＝＜＞（）［］｛｝｟｠｜￤／＼￢＄";
 let pw = "";

 for(var i = 0; i < lengthEl; i ++){
   pw = pw + charSet.charAt(Math.floor(Math.random() * Math.floor(charSet.length - 1)));
 }

 document.getElementById("password").value = pw;

})


//result
//resultEl.innerText = generatePassword()

// object of functions
//let generatedPw = "";
//const myFunc = {
 //lower: getLower,
  //upper: getUpper,
  //number: getNumber,
  //symbol: getSymbol
//};

 //var charArray = [{getLower}, {getUpper}, {getNumber}, {getSymbol}]; 


//generateBtn.addEventListener('click', () =>{
 //  for(var i = 0; i < lengthEl; i ++){
   // var charArray = [lower, upper, number, special]; 
      //charArray.forEach(type =>{
     //   var newResult = charArray[1]
       // console.log(newResult)};

        //generatedPw += randomFunc[myFunc]();

      //})


      
      
      
 

//  console.log(lengthEl);
 // console.log(i);
  //console.log(special);
  //console.log(upper);
  //console.log(lower);
  //console.log(number);

//})

//function generatePassword(lower, upper, number, symbol){
  // string to build pw
  // loop over input length
  //generate each type of char
  //return to pw output
//}




console.log("This is a test");

//function getLower(){
  //return String.fromCharCode(Math.floor(Math.random() * 26) + 97);


//}
//function getUpper(){
 // return String.fromCharCode(Math.floor(Math.random() * 26) + 65);


//}

//function getNumber(){
  //return String.fromCharCode(Math.floor(Math.random() * 10) + 48);


//}
//function getSymbol(){
 // const symbols = '，．：；！？＂＇｀＾～￣＿＆＠＃％＋－＊＝＜＞（）［］｛}｜￤／＼￢＄'
  //return symbols[Math.floor(Math.random() * symbols.length)];


//}


//console.log(getLower());
//console.log(getUpper());
//console.log(getNumber());
//console.log(getSymbol());
















