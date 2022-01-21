
var isActive = null;

function startTimer(duration){
    var remainingSeconds = duration;
    var minutes = 0;
    var seconds = 0;

    if(remainingSeconds === 0){
        return 0;
    }

    interval = setInterval(() => {
        remainingSeconds--;

        minutes = getMinutes(remainingSeconds);
        seconds = getSeconds(remainingSeconds);

        document.getElementById("time").innerHTML = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
        if(remainingSeconds === 0){
            clearInterval(interval);
        }
    },1000);
}

function getMinutes(duration){
    minutes = Math.floor(duration /60);
    return minutes;
}

function getSeconds(duration){
    return seconds = duration % 60;
}



function startPomodoro(){
    startTimer(5);
}

