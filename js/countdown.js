(() => {
    var display = document.querySelector('#countdown');

    calcDiff();
    var interval;

    function doubleDigits(number) {
        let res = number.toString();
        if(number <= 9) {
            res = '0' + number;
        }
        return res;
    }

    function partyTime() {
        clearInterval(interval);
        document.body.innerHTML = '<div class="box"><h1 class="countdown" id="countdown">PARTY TIME</h1><img class="slinger" src="/img/slinger.png" alt=""></div>';
        document.body.classList.add('party');
    }

    function calcDiff() {
        let today = new Date();
        let party = new Date("2018-12-26 18:30:00");
        let diffMillis =  (party - today);
        let diffDays = Math.floor((diffMillis / (60*60*24*1000)));
        let daysMs = diffMillis % (60*60*24*1000);
        let diffHours = Math.floor((daysMs / (60*60*1000)));
        let hoursMs = diffMillis % (60*60*1000);
        let diffMinutes = Math.floor((hoursMs / (60*1000)));
        let minutesMs = diffMillis % (60*1000);
        let diffSeconds = Math.floor((minutesMs / 1000));

        if(diffMillis <= 0) {
            partyTime();
        } else {
            interval = setInterval(calcDiff, 1000);
        }

        display.innerHTML = `Nog ${doubleDigits(diffDays)} dagen ${doubleDigits(diffHours)} uren ${doubleDigits(diffMinutes)} minuten ${doubleDigits(diffSeconds)} seconden tot het kerstfeestje!`;
    }
})();