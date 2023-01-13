// declare variables 

const timerBlock = document.getElementById("timer");
let timerDate;
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
let timer;

class Timer {

    updateTimer(timerDate) {
        timer = setInterval(function(){
            timerDate.setTime(timerDate.getTime() + 1000); 
            timerBlock.innerHTML = timerDate.toTimeString().split(" ")[0];
        }, 1000);
    }
}

class TimerMilliSec extends Timer {

    updateTimer(timerDate) {
        timer = setInterval(function(){
            timerDate.setTime(timerDate.getTime() + 1000); 
            timerBlock.innerHTML = timerDate.toTimeString().split(" ")[0] + ":" + timerDate.getMilliseconds();
        }, 1000);
    }
}

 
const startTimer = () => {


    timerSec = new Timer();
    timerSec.updateTimer(new Date(0, 0));

}  


const stopTimer = () => {

    timerBlock.innerHTML = "00:00:00";
    clearInterval(timer);
}
