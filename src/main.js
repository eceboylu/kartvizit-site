import './style.css'

document.getElementById("btn").addEventListener("click", () => {
  window.location.href = "https://gpsposplus.com";
});

// TELEFON - ara + WhatsApp seçimi
document.getElementById("phone").addEventListener("click", () => {
  const phone = "908503030477";

  // Direkt sistem arama ekranı (iOS/Android native)
  window.location.href = `tel:+${phone}`;
});

// MAIL
document.getElementById("mail").addEventListener("click", () => {
  window.location.href = "mailto:info@gpsyazilim.com";
});

document.getElementById("whatsapp").addEventListener("click", () => {
  const phone = "908503030477";

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `https://wa.me/${phone}`;
  } else {
    window.open(`https://wa.me/${phone}`, "_blank");
  }
});


// HARİTA - yol tarifi
document.getElementById("map").addEventListener("click", () => {
  const address = encodeURIComponent(
    "Atatürk Mah. Ertuğrul Gazi Sk. Metropol İstanbul C1 Blok No:2 B İç Kapı No:376 Ataşehir İstanbul"
  );

  window.open(
    `https://www.google.com/maps/dir/?api=1&destination=${address}`,
    "_blank"
  );
});