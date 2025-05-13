let devToolsOpen = false;
const threshold = 160; 

setInterval(() => {
    if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
    ) {
        devToolsOpen = true;
        document.body.innerHTML = '<h1 style="color: red; text-align: center;">Cảnh báo: Không được xem mã nguồn! Vui lòng đóng DevTools.</h1>';
    }
}, 500);

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Skill issue');
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'i')) {
        e.preventDefault();
        alert('Skill issue');
    }
});

function updateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;

    const timeString = `Date: ${dayName} ${monthName} ${day}${getOrdinalSuffix(day)} ${year} Time: ${displayHours}:${minutes} ${period}`;
    document.getElementById('current-time').textContent = timeString;
}

function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

updateTime();
setInterval(updateTime, 1000);