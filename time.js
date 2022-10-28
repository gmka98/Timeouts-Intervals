const shit = "prout"
const prout = document.getElementById('prout')
let z = 0;


const interval = setInterval(() => {
  console.log(shit[z]);
  // prout.innerHTML = prout.innerHTML + shit[z];
  prout.innerHTML +=  shit[z];
  z++;

  if (z == shit.length){
    clearInterval(interval)
  }

}, 1000);

const sec = [1,2,3,4,5,6,7,8,9,10]
const minute = document.getElementById('temps')
let t =0;

setInterval(displayHello, 1000*60);

function displayHello() {
  document.getElementById("demo").innerHTML += sec[t] + "minute has passed";
  t++;
  if (t == shit.length){
    clearInterval(interval)
  }

} 1000;
