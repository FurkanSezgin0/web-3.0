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

// Form doğrulama ve bildirim işlevi
function validateForm(event) {
    event.preventDefault(); // Sayfa yenilenmesini engeller

    // Form alanlarını kontrol et
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Formda eksik alan olup olmadığını kontrol et
    if (!fullname || !email || !phone || !message) {
        alert("Lütfen tüm alanları doldurun!");
        return false;
    }

    // Başarı bildirimi göster
    const notification = document.getElementById('notification');
    notification.classList.add('visible');

    // Bildirimi birkaç saniye sonra gizle
    setTimeout(() => {
        notification.classList.remove('visible');
    }, 3000);  // Bildirim 3 saniye sonra kaybolur

    // Formu temizle
    document.getElementById('contact-form').reset();

    return false; // Sayfa yenilenmesini engellemeye devam et
}
