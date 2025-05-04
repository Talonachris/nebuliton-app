function openTab(target) {
  const urls = {
    panel: "https://panel.nebuliton.io",
    shop: "https://nebuliton.io",
    billing: "https://billing.nebuliton.io",
    info: "appinfo.html"
  };

  const url = urls[target];
  if (url) {
    window.open(url, "_blank");
  } else {
    alert("Link nicht gefunden.");
  }
}
