const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const panelId = btn.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    // toggle state
    btn.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });

  // keyboard support: Enter/Space toggles
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
});
