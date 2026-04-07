import './style.css'

document.getElementById("btn").addEventListener("click", () => {
  window.location.href = "https://gpsteknoloji.com.tr";
});

// TELEFON - ara + WhatsApp seçimi
document.getElementById("phone").addEventListener("click", () => {
  const phone = "908503030477";

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    const choice = confirm("Arama yapmak için OK, WhatsApp için İptal'e bas");
    
    if (choice) {
      window.location.href = `tel:+${phone}`;
    } else {
      window.open(`https://wa.me/${phone}`, "_blank");
    }
  } else {
    window.open(`https://wa.me/${phone}`, "_blank");
  }
});


// MAIL
document.getElementById("mail").addEventListener("click", () => {
  window.location.href = "mailto:info@gpsyazilim.com";
});


// HARİTA - yol tarifi
document.getElementById("map").addEventListener("click", () => {
  const address = encodeURIComponent(
    "Sultan Selim Mah. Şahinler Cd No:21 Kağıthane İstanbul"
  );

  window.open(
    `https://www.google.com/maps/dir/?api=1&destination=${address}`,
    "_blank"
  );
});