// var percent = +prompt("Enter your percent")
// if (percent >=80 && percent <=100){
//     alert("A+")
// }
// else if (percent >=70 && percent <=80){
//     alert("A")
// }
// else if (percent >=60 && percent <=70){
//     alert("B")
// }
// else if (percent >=50 && percent <=60){
//     alert("C")
// }
// else if (percent >=40 && percent <=50){
//     alert("D")
// }
// else if (percent >=33 && percent <=40){
//     alert("E")
// }
// else if (percent >=0 && percent <=33){
//     alert("Failed")
// }
// else{
//     alert("You didnot write correct percentage")
// }

// var students = ["hamza " , "saif" , "talha" ,"faryan ", "hassan"]
// var copyStudents = students.slice(0,4);
// console.log(students)
// students.pop()
// console.log(students)
// students.push("jazim")
// console.log(students)

// console.log(copyStudents)

// console.log( "welcome" + " " + students[3])
// var arr = ["cat" , 'dog']
// arr.splice(1,1  ,"pig", "duck", "emu");
// var a;
// for (a =10 ; a>=1 ;--a ){
//     document.write(a+"<br>" )

// }

// var table = +prompt("Enter your number")
// for (i=1 ;i<=10 ; i++){
//     document.write(table + "x" + i + "=" + table*i + "<br>");
// }

// for(i=9 ; i>=1 ; --i){
//     document.write(table + "x" + i + "=" + table*i + "<br>");
// }
// var names = ["hamza" , "basit " , "saif" , "moiz" , "basit " , "saif" , "moiz" , "basit " , "saif" , "moiz"]
// for(var i = 0 ; i< names.length ; i ++){
//     document.write(names[i]+"<br>")
// }

//  for (var i =0 ; i< 10 ; i++){
//     for(var j = 0; j<40 ;j++){
//         document.write("*")
//     }
//     document.write("<br>")
//  }
// var word = prompt("Enter your word");
// var check = "";
// for(var i = word.length- 1 ;i>=0 ; i--){
//     check += word[i]

// }
// if (word === check){
//     console.log(word +  " is palindrome word")
// }
// else{
//     console.log(word + " is not palindrome word")
// }

// var a = +prompt("enter yout first value")
// var sign = prompt("enter yout operator")
// var b = +prompt("enter yout second value")
// console.log(a+ sign + b)
// if (sign ===  "+"){
// alert(a+b)
// }
// else if (sign=== "-"){
//     alert(a-b)
// }
// else if (sign=== "/"){
//     alert(a/b)
// }
// else if (sign=== "*"){
//     alert(a*b)
// }
// else if (sign=== "%"){
//     alert(a/b * 100 + "%")
// }

// for (var a=01 ; a<=10000 ; a=a+10){
//     for(var b =a ; b< a+10 ; b++){
//         document.write(b + "   ")

//     }
//     document.write("<br>")
// }

// var city = prompt("Enter your city Name")
// city = city.toLowerCase()
// var arr =[ 'karachi', 'hyderabad', 'peshawar' , 'lahour' ]

// for(var i = 0 ;  i<arr.length; i++){
//     if (arr[i] === city){
//         alert("Matched")
//         break

//     }
//     else {

//         alert("Again check")

//     }

// }
//  var city = prompt("Enter your city name")
//  var firstchar = city.slice(0,1);
//  firstchar = firstchar.toUpperCase()
//  var otherchar =  city.slice(1);
//  otherchar = otherchar.toLowerCase()

//   city = firstchar + otherchar ;
//   console.log (city)]\

// var str = prompt("Enter some text");
// var newlength = str.length;
// for(var i = 0 ;  i<newlength; i++){
//     if(str.slice(i ,i+2) === "  " ){
//         alert(" double spaces are found!");
//         break;
//     }

// }
// var num = "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."
// // for ( var i =0 ; i < num.length ; i++){
// //     if (num.slice(i , i+11)=== "It includes"){
// //         num = num.slice(0,i) +"The familiar " + num.slice(i +11);
// //         console.log(num);
// //     }
// // }

// // var num1 = num.indexOf('It includes');
// // num2 = num.slice(0, num1)
// // num3 = "The Powerful"
// // num4 = num.slice(num1+ 11   )
// // console.log(num2 + num3 + num4)

// var  num1 = num.replace(/and/g , "the")
// console.log(num1)

// var num = 1.5;
// var round1 = Math.floor(num)
// console.log(round1);

// var user1 = prompt(" Enter your 1st name")
// var user2 = prompt(" Enter your 2nd name")
// var user3 = prompt(" Enter your 3rd name")
// var user4 = prompt(" Enter your 4th name")
// var user5 = prompt(" Enter your 1th name")

// var toss = Math.random() *5   ;
// var floor = Math.floor(toss)
// if (floor === 0 ){
//     alert(user1 +  " Win the toss")
// }
// else if (floor === 1 ){
//     alert( user2 +  " Win the toss")
// }
// else if (floor === 2 ){
//     alert( user3 +  " Win the toss")
// }
// else if (floor === 3 ){
//     alert( user4 +  " Win the toss")
// }
// else{
//     alert( user5 +  " Win the toss")
// }

// var a = "10";
// num = Number(10);
// num1 = parseInt(10);
// console.log(num , num1)

// var b = 20.46445;
// console.log(b.toFixed(4));

// var right = new Date();
// var a= right.toDateString()
// console.log(right)
// var day = right.getDay();
// console.log(day)


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// console.log(now)
// var theDay = now.getDay();
// console.log(theDay)
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday)
// var Month  =  now.getMonth();
// console.log(Month)

// var dob = new Date(prompt("Enter your date of birth "))
// var dobmili = dob.getTime()
// var today  = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// document.write(diff+"<br>");
// var accuracy = Math.floor(diff/(1000*60*60*24*30*12));
// document.write("Age = "+accuracy);

// function gree(){
//     alert("Hello World")
// }
// gree();

// function gree(g){
//     alert(g)
// }
// gree("Hello World");

// function add(a,b,c){
//     alert(a+b-c)
// }
// add(47,6,2)

// function add(a,b,c){
//     var z = a+b-c
//     return z
// }
// var g = add(47,48,2)
// alert(g);

// switch condition

// var name =  "saif"
// switch (name){
//     case "hamza":
//         alert("Hello Hamza")
//         break;
//     case "saif":
//         alert("Hello Saif")
//         break;
//     default:
//         alert("Hello Sir")

// }

// Loop
//   for (var a = 1; a<=10 ; a++){
//     console.log(a )

//   }
// // While Loop >

//   var b= 1;
//   while(b<=10){
//     console.log(b );
//     b++;
//   }

// // Do While Loop >

// var c= 0;
// do{
//     console.log(c);
//     c++;
// }
// while(c<=10);

// function h1(){
//   var c =prompt("Enter your name!")

//   alert( "Welcome " + c)
// }

// function getfun (){
//   var name = document.getElementById("name")
//   alert("Asslam-o-Alaikum " + name.value);


//  var cityToCheck =  "BOSTON";
//  var firstChar = cityToCheck.slice(0,cityToCheck.length);
//  console.log(firstChar);

//   var weight = 150+75;
//   document.write("<br>" + weight );

//   var num = prompt("Enter Table number")
//   for(var i=1 ; i<=10 ; i++){
//     document.write( "<br>" + num + " x " + i + "= "+ i*num);
//   }

// var spec = +prompt("Your species?", "Cats");
// var tooManyCats = spec +1;
// alert(tooManyCats);

// var x = prompt("Where does the Pope live?");
//  var y = x.toLocaleLowerCase();
//  if (y === "vatican") {
//  alert("Correct!");
//  }
//  else{
//     alert("Not Correct!");
//  }
// var ticketNumber = 48596;
// if(ticketNumber !== 48596){
//     alert ("Better luck next time")
// }
// else{
//     alert("Congrajulation you are winner")
// }

// var weight = prompt("Enter your weight");
// var time = prompt("Enter your time");
// var age = prompt("Enter your age");
// var gender = prompt("Enter your gender");
// if (weight > 80 && age > 25 && time > 7 || gender == "male") {
//   alert("you are selected");
// }
// else{
//     alert("Sorry you are eligible")
// }
// var name = prompt("Enter your name")
//     alert("Welcome to "+ name)
//     var para = document.getElementById('para').innerHTML;
// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
// document.write( para + name)

// var mixedArray = [1, "Bob", "Now is", 'true' ,  'false'];
// mixedArray.pop()
// console.log(mixedArray)

// mixedArray.push('hamza', 'saif');
// console.log(mixedArray)

// mixedArray.shift()
// console.log(mixedArray)

// mixedArray.unshift('hamza', 'saif');
// console.log(mixedArray)

// mixedArray.splice(1,2 , 'new' ,  "failed")
// console.log(mixedArray)

// for (i=99 ; i>=1; i--){
//  document.write('Sing "'+i+' bolltes of beer on the wall, '+i+' bottles of beer."'+'<br>')
//  document.write('Sing "'+'Take one down and pass it around, '+i+' bottles of beer on the wall."'+'<br>')
// }

// var cityToCheck = prompt("Enter your city name")
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// for(i=0 ;i<=cleanestCities.length; i++){
//   if(cityToCheck === cleanestCities[i]){
//     document.write("Its's one  of the cleanest cities" +"<br>");

//   }

// }
// var str = prompt("Enter some text")
// var strLength = str.length;
// console.log(strLength)
// for(var i =0;i<strLength;i++){
//   if(str.slice(i,i+2)=== "  "){
//   alert("Double space fount")
//   break
// }
// }

// var para = "the New Yorker magazine doesn't allow the phrase World War II."
// for(var i =0 ; i<para.length ;i++){
//     if(para.slice(i,i+12)=== "World War II"){
//    var text= para.slice(0,i) +"the Second World War" +para.slice(i+12)+"<br>"
//     document.write(text)
// }
// }
// var firstChar = para.indexOf("World War II")
// console.log(firstChar)
// document.write(para.slice(0,firstChar)+"the Second World War"+ para.slice(firstChar+12) +"<br>")

// var replace = para.replace('World War II' ,'the Second World War'+"<br>")
// document.write(replace);

// var newText = text.replace(/World War II/g, "the Second World War");
// document.write(newText);
// var  seg = para.slice(0,1);
// var first = seg.toLocaleUpperCase();
// var last = para.slice(1)
// var result = first + last;
// document.write(result);

// var score = Math.random() * 22 ;
// console.log(Math.round(score))
// var myFractional = parseInt(1.9999);
// console.log(myFractional)


//  var bigDecimal = Math.random();
//  var improvedNum = (bigDecimal * 7) ;
//  var numberOfStars = Math.floor(improvedNum);
//  console.log(numberOfStars)

// var new1 = "hello"
// function green(m){
//     alert(m);
// }
// green(new1);


// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      var thesec = now.getSeconds();
     
//      console.log("Current time: "+ theHr + ":" + theMin + ":" + thesec);
//      }
// tellTime();
// function large(){
//      var name = document.getElementById("img2");
//      name.className = "img3"
// }
// function small(){
//      var name = document.getElementById("img2");
//      name.className = "img1"
// }
// function clickOn(){
//     var bulbOn = document.getElementById("bulb1")
//     bulbOn.src = "images2-removebg-preview.png"
    
// }
// function clickOff(){
//     var bulbOn = document.getElementById("bulb1")
//     bulbOn.src = "images1-removebg-preview.png"
    
// }
var count = 0;
var num = "*"
function timer(){
    count++
    console.log(count)
}
var interi = setInterval(timer , 1000)

setTimeout(function(){
    clearInterval(interi)
}, 6000)

// dddddddddddddddddddddddddddddddddd




var min = 0 ; 
var sec = 0;
var mSec = 0;
var minHead =document.getElementById("min");
var secHead =document.getElementById("sec");
var mSecHead =document.getElementById("mSec");
var inter;
var newShow;
var hourHead =document.getElementById("hour");
var minuteHead =document.getElementById("minute");
var secondHead =document.getElementById("second");


function time(){
    mSec++ ;
    mSecHead.innerHTML= mSec;
    if(mSec >= 100){
        sec++;
        secHead.innerHTML = sec;
        mSec = 0;
    }
    else if (sec > 59 ){
            min++;
            minHead.innerHTML = min;
            sec = 0;
     }
     

    
}

function start(){
    var input = document.getElementById("input");
    var newInput = input.value;
    if(newInput !== ""){
        clearInterval(inter)
        minHead.innerHTML=0;
        secHead.innerHTML=0;
        mSecHead.innerHTML=0;
        sec = 0;
        mSec = 0;
        min = 0;
        inter = setInterval(time , 10);
        setTimeout(function(){
            clearInterval(inter)
            mSecHead.innerHTML=0;
        }, 60000*newInput)
        

        
    }
    else{
    clearTimeout(inter);
   inter = setInterval(time , 10);
}
    
}
function stop(){
    clearTimeout(inter)
}
function reset(){
    clearTimeout(inter);
    minHead.innerHTML=0;
    secHead.innerHTML=0;
    mSecHead.innerHTML=0;
    sec = 0;
    mSec = 0;
    min = 0;
    
}



function dateShow(){
    var now = new Date();
    var hour= now.getHours();
    var minute= now.getMinutes();
    var second= now.getSeconds();
    hourHead.innerHTML = hour;
    minuteHead.innerHTML = minute;
    secondHead.innerHTML = second;
    console.log(second)
}

newShow = setInterval(dateShow , 1000);







 
