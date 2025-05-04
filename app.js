const urls = {
  panel: "https://panel.nebuliton.io",
  shop: "https://nebuliton.io",
  info: "appinfo.html",
  billing: "https://billing.nebuliton.io"
};

function switchTab(tab) {
  const frame = document.getElementById("appFrame");
  const loginHint = document.getElementById("login-hint");
  const loginBtn = document.getElementById("loginBtn");

  const target = urls[tab];
  frame.src = target;
  frame.style.display = "block";
  loginHint.style.display = "none";

  if (tab === "panel" || tab === "billing") {
    setTimeout(() => {
      try {
        const loc = frame.contentWindow.location.href;
        if (loc.includes("/auth/login") || loc.includes("login")) {
          throw new Error("Loginseite erkannt");
        }
      } catch (e) {
        frame.style.display = "none";
        loginHint.style.display = "block";
        loginBtn.onclick = () => window.open(target, "_blank");
      }
    }, 2000);
  }
}

// Beim Start: Shop anzeigen
window.addEventListener("DOMContentLoaded", () => {
  switchTab("shop");
});
