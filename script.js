function copyIP() {
    navigator.clipboard.writeText("play.fluxsmp.com");
    alert("Server IP copied!");
}

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(reveal => {
        const top = reveal.getBoundingClientRect().top;

        if(top < trigger) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

async function fetchServerStatus() {
    try {
        const response = await fetch(
            'https://api.mcsrvstat.us/2/play.hypixel.net'
        );

        const data = await response.json();

        if(data.online) {
            document.getElementById('server-status').textContent = '🟢 Online';
            document.getElementById('player-count').textContent = data.players.online;
        } else {
            document.getElementById('server-status').textContent = '🔴 Offline';
        }
    } catch(err) {
        document.getElementById('server-status').textContent = 'Error';
    }
}

fetchServerStatus();
