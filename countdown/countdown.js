let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')




setInterval(()=>{
    let curr = new Date().getTime();
// console.log(curr);

let dest = new Date(`january 1,${new Date().getFullYear()+1}`).getTime()
// console.log(dest);

let diff = dest - curr;
// console.log(diff);
let day = Math.floor(diff/(1000*60*60*24));
// console.log(day);
days.innerHTML = day
let hour = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
// console.log(hour);
hours.innerHTML = hour
let minute = Math.floor(diff%(1000*60*60)/(1000*60)); 
// console.log(minute);
minutes.innerHTML = minute
let second = Math.floor(diff%(1000*60)/(1000));
// console.log(second);
seconds.innerHTML = second

},1000)