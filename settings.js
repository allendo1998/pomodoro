const settings = () => {
    const saveSettings = document.querySelector(".save")
    var focused_work = document.getElementById("focused_work");
    var short_break = document.getElementById("short_break");

    saveSettings.addEventListener('click', () =>{
        var work = focused_work.value;
        var sbreak = short_break.value;
        
        chrome.storage.sync.set({"focusedWork": work, "shortBreak": sbreak}, 
        function() {
            console.log("value is set to " + work);
            console.log("value is set to " + sbreak);
        })
    });



    function save_settings() {

    }

}

settings();