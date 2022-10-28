const d = new Date()

const bxl = d.getTimezoneOffset();
d.setMinutes(d.getMinutes() + bxl);
console.log("UTC:" + d)



const Anchorage = -480;
d.setMinutes(d.getMinutes() + Anchorage );
console.log("UTC:" + d )



const Reykjavik = -60 ;
d.setMinutes(d.getMinutes() + Reykjavik );
console.log("UTC:" + d )


const Saint_Petersburg = 3*60;
d.setMinutes(d.getMinutes() + Saint_Petersburg );
console.log("UTC:" + d )

 let birth = new Date('1998-10-15')
 let today = new Date('2022-10-28')
 const old_day = new Date('1980-10-15')
 

 var now = new Date().getTime();
 const future = now +(1000 * 60 *60 * 80000)
 console.log(today.getTime()- birth.getTime()) / (1000* 3600 *24) + 'day have passed between your birth date'

 console.log(today.getTime - old_day.getTime()) / (1000* 3600 *24) + 'day have passed between your old day date'

console.log(future);
