import { ClockView } from '../common/HelloPage';

function runClock() {
    const content = document.getElementById('clock');
    setInterval(() => {
        const date = new Date();
        content.innerHTML = ClockView(date.getHours(), date.getMinutes(), date.getSeconds());
    }, 1000);
}

runClock();