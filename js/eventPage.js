function show() {
    var time = /(..)(:..)/.exec(new Date());
    var hour = time[1] % 12 || 12;
    var period = time[1] < 12 ? 'a.m.' : 'p.m.';
    new Notification(hour + time[2] + ' ' + period, {
        icon: '48.png',
        body: '¡Hora de despedir al Tano'
    });
}

if (!localStorage.isInitialized) {
    localStorage.isActivated = true;
    localStorage.frequency = 1;
    localStorage.isInitialized = true;
}

// If  window.Notification exists...
if (window.Notification) {

    if (JSON.parse(localStorage.isActivated)) { show(); }

    var interval = 0;

    setInterval(function() {
        interval++;

        if (
            JSON.parse(localStorage.isActivated) &&
            localStorage.frequency <= interval
        ) {
            show();
            interval = 0;
        }
    }, 60000);
}

