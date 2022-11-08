const indexPage = (function () {
    let _noSleepLibrary;
    let $indexMainPage
    let $noSleepButton;
    let isEnabledWakeUp = false;
    const initialize = () => {
        cacheDom();
        bindEvents();
    }
    const cacheDom = () => {
        _noSleepLibrary = new NoSleep();
        $indexMainPage = document.querySelector("#indexPage");
        $noSleepButton = $indexMainPage.querySelector("#enableNosleep");
    }
    const bindEvents = () => {
        $noSleepButton.addEventListener("click", configureSleepWindow, false);
    }
    var configureSleepWindow = () => {
        isEnabledWakeUp = !isEnabledWakeUp;
        $indexMainPage.classList.toggle("background-animation");
        if (isEnabledWakeUp) {
            _noSleepLibrary.enable();
            $noSleepButton.innerText = "Take a Break!!!.Have a cup of Tea";
        } else {
            $noSleepButton.innerText = "Click me!!!";
            _noSleepLibrary.disable();
        }
    }
    return {
        initialize: initialize
    }
})();


