const timer = () => {
    var interval = null;

    var break_time = 3;
    var focused_work = 5;

    var remainingSeconds = 0;
    var section = 0; // section 0 = focused work, 1 = break time

    updatePage();
    updateSectionTime();
    updateTime();

    const button = document.querySelector(".btn");
    const nextButton = document.querySelector(".nextButton");

    button.addEventListener('click', () =>{
        if(interval === null){
            startTime();
        }
        else {
            stopTime();
        }
    });

    nextButton.addEventListener('click', () => {
        switchSection();
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
            document.getElementById("changeButton").style.color = "#E27D60";
            document.getElementById("changeButton").style.borderColor = "#E27D60";
            document.getElementById("time").style.color = "white";
            document.getElementById("task").style.color = "#23665d";
            document.body.style.backgroundColor = "#85dcb8";

            var elements = document.getElementsByClassName("card");

            for(var i = 0; i < elements.length; i++){
                elements[i].style.backgroundColor = "#85dcb8";
            }
        }
        else{
            document.getElementById("task").innerHTML = "Break";
            document.getElementById("changeButton").style.color = "#5DA2D5";
            document.getElementById("changeButton").style.borderColor = "#5DA2D5";
            document.getElementById("time").style.color = "#ECECEC";
            document.getElementById("task").style.color = "#F78888";
            document.body.style.backgroundColor = "#F3D250";

            var elements = document.getElementsByClassName("card");

            for(var i = 0; i < elements.length; i++){
                elements[i].style.backgroundColor = "#F3D250";
            }
            
        }
    }

    function switchSection(){
        if(section === 0){
            section = 1;
            stopTime();
            updatePage();
            updateSectionTime();
            updateTime();            
        }
        else{
            section = 0;
            stopTime();
            updatePage();
            updateSectionTime();
            updateTime();
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
                switchSection();
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
        clearInterval(interval);
        interval = null;
        updateButton();
    }

    function startTime(){
        startTimer();
    }

    function updateButton(){
        if(interval === null){
            document.getElementById("changeButton").innerHTML = "play_circle_outline";

        }
        else{
            document.getElementById("changeButton").innerHTML = "pause_circle_outline";
        }
    }
}

timer();
