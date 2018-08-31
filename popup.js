var timerInterval;

function startTimer(duration, display) {
  var timer = duration;
  timerInterval = setInterval(function () {
        display.textContent = timer - 1;

        if (timer <= config.caution_starts_at_seconds + 1) {
          document.body.style.backgroundColor = config.caution_color;
        }

        if (timer <= config.warning_starts_at_seconds + 1) {
          document.body.style.backgroundColor = config.warning_color;
        }

        if (--timer < 0) {
            timer = duration;
        }

        if (timer == 0) {
          clearInterval(timerInterval);
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  var button = document.getElementById('startTimer');
  var secondsAllocatedElement = document.getElementById('secondsAllocated');
  var countdownElement = document.getElementById('countdown');
  var duration; 

  secondsAllocatedElement.value = config.default_start_seconds;
  countdownElement.textContent = config.default_start_seconds;
  
  button.addEventListener('click', () => {
    duration = parseInt(secondsAllocatedElement.value);
    clearInterval(timerInterval);
    document.body.style.backgroundColor = 'green';
    startTimer(duration, countdownElement);
  });

  secondsAllocatedElement.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
      button.click();
    }

    duration = parseInt(secondsAllocatedElement.value) || 0;

    if (duration !== null) {
      countdownElement.textContent = duration;
    } else {
      countdownElement.textContent = 0;
    }
  });

});
