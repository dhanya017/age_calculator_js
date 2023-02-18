const date_chosen=document.getElementById('date_chooser');
const date_display=document.getElementById('display');
let years=document.getElementById('y');
let months=document.getElementById('m');
let days=document.getElementById('d');
let seconds=document.getElementById('s');
date_chosen.addEventListener('change',function(e){
    let options={
        year:'numeric',month:'long',day:'numeric'
    }
  let selected_date=new Date(this.value);
  let dob=selected_date.toLocaleDateString("en-US", options);
  date_display.textContent=dob;
  let milisec=Date.parse(dob);
  let milinow=Date.now();
  let mili=milinow-milisec;
  let second=1000;
  let minute=60*second;
  let hour=60*minute;
  let day=24*hour;
  let month=30*day;
  let year=day*365;
  years.textContent=Math.round(mili/year);
  months.textContent=Math.round(mili/month);
  days.textContent=Math.round(mili/day);
  seconds.textContent=Math.round(mili/second);

})