let interval;
let times = 0;

   
const element = document.getElementById("demo");
setInterval(function() {element.innerHTML += "p"}, 1500);

const element1 = document.getElementById("demo");
setInterval(function() {element1.innerHTML += "r"}, 1600);

const element2 = document.getElementById("demo");
setInterval(function() {element2.innerHTML += "o"}, 1610);

const element3 = document.getElementById("demo");
setInterval(function() {element3.innerHTML += "u"}, 1620);

const element4 = document.getElementById("demo");
setInterval(function() {element4.innerHTML += "t"}, 1630);



if (interval != undefined) {
  clearInterval(interval);
};


const temps = 60;
const sec = [ "a" , 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let text = "";
for(let i =0; i < sec.length; i++){
  text+= sec[i];
document.body.
}


function minutes(){
  console.log( sec + "minute has passed");
  sec++;

}

setTimeout(minutes, 60000);