// Müzik Kontrolü
const playMusicBtn = document.getElementById('play-music-btn');
const audio = document.getElementById('background-music');

// Müzik oynat/durdur
playMusicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playMusicBtn.textContent = "Müziği Durdur";
    } else {
        audio.pause();
        playMusicBtn.textContent = "Müzik Oynat";
    }
});

// "Mesaj At" butonu iletişim formuna yönlendirme yapar
const messageBtn = document.getElementById('message-btn');
messageBtn.addEventListener('click', () => {
    document.getElementById('iletişim').scrollIntoView({ behavior: 'smooth' });
});
window.addEventListener('load', () => {
    audio.pause();
    playMusicBtn.textContent = "Müzik Oynat";
});
playMusicBtn.classList.toggle('playing'); // CSS ile oynatma durumuna göre stil değiştirilebilir
