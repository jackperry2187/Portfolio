(function($) {

    let timeFirstRun = 0;
    let timeLastRun = 0;

    const nameAnimation = () => {
        let first = $('first');
        let last = $('last');
        let interval = setInterval(() => {
            if(timeFirstRun == 6) $('underscore1').remove();
            if(timeLastRun == 4) $('underscore2').remove();
            if(timeFirstRun == 7 && timeLastRun == 5) clearInterval(interval);
            if(timeFirstRun != 7) {
                first.html(first.html() + "Jackson".charAt(timeFirstRun));
                timeFirstRun++;
            }
            if(timeLastRun != 5) {
                last.html(last.html() + "Perry".charAt(timeLastRun));
                timeLastRun++;
            }
        }, 150);
        
    }

    const startUp = () => {
        nameAnimation();
    }

    startUp();

})(window.jQuery);