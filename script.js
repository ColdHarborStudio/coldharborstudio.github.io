const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const markImageFallback = (image) => {
  const screenshotCard = image.closest(".screenshot-card");

  if (screenshotCard) {
    screenshotCard.classList.add("has-missing-image");
  }

  image.classList.add("is-hidden");
};

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  if (image.complete && image.naturalWidth === 0) {
    markImageFallback(image);
  }

  image.addEventListener("error", () => {
    markImageFallback(image);
  });
});
