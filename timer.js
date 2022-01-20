// var interval = null;
// var remainingSeconds = 90;


// const minutes = Math.floor(remainingSeconds / 60);
// const seconds = remainingSeconds % 60;

startTimer(5);

function startTimer(duration){
    var remainingSeconds = duration;
    if(remainingSeconds === 0){
        console.log("Complete");
        return 0;
    }

    interval = setInterval(() => {
        remainingSeconds--;
        console.log(remainingSeconds);

        if(remainingSeconds === 0){
            clearInterval(interval);
        }
    },1000);
}

