const output = document.getElementById("output");

document.getElementById("btn-text").addEventListener("click", () => {
  output.textContent = "This was updated using textContent ✅";
});

document.getElementById("btn-innertext").addEventListener("click", () => {
  output.innerText = "This was updated using innerText ✅";
});

document.getElementById("btn-html").addEventListener("click", () => {
  output.innerHTML = "<strong>This was updated using innerHTML ✅</strong>";
});
