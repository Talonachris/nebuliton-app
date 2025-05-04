function switchTab(tab) {
  const frame = document.getElementById('appFrame');
  if (tab === 'panel') frame.src = 'https://panel.nebuliton.io';
  else if (tab === 'shop') frame.src = 'https://nebuliton.io';
  else if (tab === 'info') frame.src = 'appinfo.html';

  // Alle Buttons zurücksetzen
  document.querySelectorAll('.bottom-nav button').forEach(btn => btn.classList.remove('active'));
  // Aktiven Button hervorheben
  document.getElementById(tab + '-btn').classList.add('active');
}

// Beim Laden "panel" als aktiv setzen
window.addEventListener("DOMContentLoaded", () => {
  switchTab('panel');
});
