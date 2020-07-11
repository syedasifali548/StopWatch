var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;


var hourHeading = document.getElementById("hour")
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")


function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >=100){
        sec++
        secHeading.innerHTML = sec
        msec = 0;
    }else if(sec>=60){
    min++
    sec = 0;
    minHeading.innerHTML  = min
    }else if(min>=60){
        hour++
        hourHeading.innerHTML = hour
    }

}
function start(){
    document.getElementById('button').disabled = true; 

    interval = setInterval(timer,10)
   
}


function stop(){
    document.getElementById('myFoo').style.pointerEvents = 'auto';

    clearInterval(interval)
   
}


function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
   
    stop()
   
    
}