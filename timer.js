const timer = () => {
    var isActive = null;
    var remainingSeconds = 5;

    const button = document.querySelector('.startButton');
    const timer = document.querySelector('.timer');


    button.addEventListener('click', () =>{
        console.log(button);
        startTime();
    });


    function startTimer(){

        if(remainingSeconds === 0){
            return 0;
        }

        interval = setInterval(() => {
            remainingSeconds--;

            minutes = getMinutes(remainingSeconds);
            seconds = getSeconds(remainingSeconds);

            document.getElementById("time").innerHTML = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

            updateButton();


            if(remainingSeconds === 0){
                stopTime();
            }
        },1000);
    }




    function getMinutes(){
        return Math.floor(remainingSeconds /60);
    }

    function getSeconds(){
        return seconds = remainingSeconds % 60;
    }

    function stopTime(){
        isActive = null;
        updateButton();
        clearInterval(interval);
    }

    function startTime(){
        startTimer();
        isActive = 1;
    }

    function updateButton(){
        if(isActive === null){
            document.getElementById("changeButton").innerHTML = "Start";
        }
        else{
            document.getElementById("changeButton").innerHTML = "Pause";
        }
    }
}

timer();
