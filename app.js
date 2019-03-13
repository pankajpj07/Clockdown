var countDownDate = new Date("Mar 31, 2019 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
if(distance<0)
    {
    
    document.getElementById("days").textContent=0;
    document.getElementById("hours").textContent=0;
    document.getElementById("minutes").textContent=0;
    document.getElementById("seconds").textContent=0;
    clearInterval(x);
    }
    
  // Time calculations for days, hours, minutes and seconds
  	var s= Math.floor(distance/1000);
  	var m=Math.floor(s/60);
  	var h=Math.floor(m/60);
  	var d=Math.floor(h/24);
    h%=24;
    m%=60;
    s%=60;
    h=(h<10)? "0" + h : h;
    m=(m<10)? "0" + m : m;
    s=(s<10)? "0" + s : s;
    document.getElementById("days").textContent=d;
    document.getElementById("hours").textContent=h;
    document.getElementById("minutes").textContent=m;
    document.getElementById("seconds").textContent=s;
    

},1000);
