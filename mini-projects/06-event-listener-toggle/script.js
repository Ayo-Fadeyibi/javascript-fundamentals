const box = document.getElementById("box");
const toggleBtn = document.getElementById("toggle-btn");

let enabled = true;

function handleMouseEnter() {
  box.classList.add("active");
  box.textContent = "Hover Active";
}

function handleMouseLeave() {
  box.classList.remove("active");
  box.textContent = "Hover Me";
}

// Attach listeners initially
box.addEventListener("mouseenter", handleMouseEnter);
box.addEventListener("mouseleave", handleMouseLeave);

toggleBtn.addEventListener("click", () => {
  if (enabled) {
    // removeEventListener()
    box.removeEventListener("mouseenter", handleMouseEnter);
    box.removeEventListener("mouseleave", handleMouseLeave);

    box.style.opacity = "0.6"; // Element.style
    box.textContent = "Hover Disabled ❌";
    toggleBtn.textContent = "Enable Hover";

    enabled = false;
  } else {
    // addEventListener()
    box.addEventListener("mouseenter", handleMouseEnter);
    box.addEventListener("mouseleave", handleMouseLeave);

    box.style.opacity = "1";
    box.textContent = "Hover Me";
    toggleBtn.textContent = "Disable Hover";

    enabled = true;
  }
});
