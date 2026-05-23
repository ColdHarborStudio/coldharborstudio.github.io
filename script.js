const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  if (image.complete && image.naturalWidth === 0) {
    image.classList.add("is-hidden");
  }

  image.addEventListener("error", () => {
    image.classList.add("is-hidden");
  });
});
