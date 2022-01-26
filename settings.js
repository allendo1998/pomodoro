const settings = () => {
    const saveSettings = document.querySelector(".save")
    var focused_work = document.getElementById("focused_work");
    var short_break = document.getElementById("short_break");

    updateValues();

    saveSettings.addEventListener('click', () =>{
        var work = focused_work.value;
        var sbreak = short_break.value;

        chrome.storage.sync.set({ 
            "work" : work,
            "break": sbreak,
     }, function() {
            if (chrome.runtime.error) {
              console.log("Runtime error.");
            }
          });
    window.location.replace("index.html");
    });

    function updateValues() {
        chrome.storage.sync.get("work", function(items) {
            if (!chrome.runtime.error) {
                focused_work.value = items.work;
            }
          });

        chrome.storage.sync.get("break", function(items) {
            if (!chrome.runtime.error) {
                short_break.value = items.break;
            }
          });
    }

}

settings();