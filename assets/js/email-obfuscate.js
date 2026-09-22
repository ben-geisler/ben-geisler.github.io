(function () {
  "use strict";

  function renderEmail() {
    var placeholder = document.getElementById("obfuscated-email");
    if (!placeholder) return;

    var fragments = [
      [98, 46, 112, 46, 103],
      [101, 105, 115, 108],
      [101, 114, 64, 109, 101],
      [100, 105, 115, 105, 110, 46],
      [117, 105, 111, 46, 110, 111]
    ];
    var address = fragments.map(function (fragment) {
      return String.fromCharCode.apply(null, fragment);
    }).join("");
    var link = document.createElement("a");
    link.href = "mailto:" + address;
    link.setAttribute("aria-label", "Email Benjamin Geisler");
    var icon = document.createElement("i");
    icon.className = "fas fa-fw fa-envelope icon-pad-right";
    icon.setAttribute("aria-hidden", "true");
    link.appendChild(icon);
    link.appendChild(document.createTextNode("Email"));
    placeholder.textContent = "";
    placeholder.appendChild(link);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderEmail, { once: true });
  } else {
    renderEmail();
  }
}());
