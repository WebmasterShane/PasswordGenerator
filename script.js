// Assignment Code
var generateBtn = document.querySelector("#generate");
//var characterSet="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ，．：；！？＂＇｀＾～￣＿＆＠＃％＋－＊＝＜＞（）［］｛｝｟｠｜￤／＼￢＄"
var pwLength = prompt("How many characters would you like in your password?")
//var lowerCaseChar = confirm("would you like lower case letters?")
//var upperCaseChar = confirm("would you like upper case letters?")
//var numberCaseChar = confirm("would you like numbers?")
//var specialCaseChar = confirm("would you like special characters?")

//DOM elements
const lengthEl = pwLength



// object of functions
const myFunc = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
};

generateBtn.addEventListener('click', () =>{
  const length = +lengthEl.value;
  console.log(typeof length);

})









console.log("This is a test")

function getLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);


}
function getUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);


}

function getNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);


}
function getSymbol(){
  const symbols = '，．：；！？＂＇｀＾～￣＿＆＠＃％＋－＊＝＜＞（）［］｛}｜￤／＼￢＄'
  return symbols[Math.floor(Math.random() * symbols.length)];


}


console.log(getLower());
console.log(getUpper());
console.log(getNumber());
console.log(getSymbol());

















//generateBtn.addEventListener("click", function(){
//var password
//for (var i=0; i=pwLength; i++)


//});

//console.log(password)