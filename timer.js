const timer = () => {
    var isActive = null;

    var break_time = 3;
    var focused_work = 5;

    var remainingSeconds = 0;
    var section = 0; // section 0 = focused work, 1 = break time


    updateSectionTime();
    updateTime();

    const button = document.querySelector(".btn");
    const nextButton = document.querySelector(".nextButton");

    button.addEventListener('click', () =>{
        if(isActive === null){
            startTime();
        }
        else {
            stopTime();
        }
    });

    nextButton.addEventListener('click', () => {
        if(section === 0){
            section = 1;
            change();
            updateButton();
            updatePage();
            updateSectionTime();
            updateTime();
        }
        else{
            section = 0;
            change();
            updateButton();
            updatePage();
            updateSectionTime();
            updateTime();
        }
    });

    function updateSectionTime(){
        if(section === 0){
            remainingSeconds = focused_work;
        }
        else{
            remainingSeconds = break_time;
        }
    }


    function updatePage(){
        if(section === 0){
            document.getElementById("task").innerHTML = "Focused Work";
        }
        else{
            document.getElementById("task").innerHTML = "Break";
        }
    }

    function startTimer(){

        if(remainingSeconds === 0){
            return 0;
        }

        interval = setInterval(() => {

            remainingSeconds--;
            updateTime();
            updateButton();

            if(remainingSeconds === 0){
                stopTime();
            }
        },1000);
    }

    function updateTime(){
        document.getElementById("time").innerHTML = getMinutes().toString().padStart(2, "0") + ":" + getSeconds().toString().padStart(2, "0");

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

    function change(){
        isActive = null;
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
