function switchTab(tab) {
  const frame = document.getElementById('appFrame');
  if (tab === 'panel') frame.src = 'https://panel.nebuliton.io';
  else if (tab === 'shop') frame.src = 'https://nebuliton.io';
  else if (tab === 'info') frame.src = 'https://nebuliton.de/appinfo';
}