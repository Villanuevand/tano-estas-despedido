/**
 * @name hidden
 * @description Change Notification color and frequency
 * @param isDeactivated
 */
function hidden(isDeactivated) {
    options.style.color = isDeactivated ? 'graytext' : 'black';

    options.frequency.disabled = isDeactivated;
}
// Listener
window.addEventListener('load', function() {

    options.isActivated.checked = JSON.parse(localStorage.isActivated);

    options.frequency.value = localStorage.frequency;


    if (!options.isActivated.checked) { hidden(true); }

    options.isActivated.onchange = function() {
        localStorage.isActivated = options.isActivated.checked;
        hidden(!options.isActivated.checked);
    };

    options.frequency.onchange = function() {
        localStorage.frequency = options.frequency.value;
    };
});

