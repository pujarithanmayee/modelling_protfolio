const openBtn = document.getElementById("openLookbook");
const closeBtn = document.getElementById("closeLookbook");
const overlay = document.getElementById("lookbookOverlay");

openBtn.addEventListener("click", function(e) {
  e.preventDefault();
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function() {
  overlay.classList.remove("open");
  document.body.style.overflow = "auto";
});

overlay.addEventListener("click", function(e) {
  if (e.target === overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "auto";
  }
});
