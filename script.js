const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const markImageFallback = (image) => {
  const screenshotCard = image.closest(".screenshot-card");
  const screenshotTrigger = image.closest(".screenshot-trigger");

  if (screenshotCard) {
    screenshotCard.classList.add("has-missing-image");
  }

  if (screenshotTrigger) {
    screenshotTrigger.disabled = true;
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

const screenshotTriggers = document.querySelectorAll("[data-fullscreen-image]");

if (screenshotTriggers.length > 0) {
  const dialog = document.createElement("dialog");
  dialog.className = "image-viewer";
  dialog.setAttribute("aria-label", "Full-size screenshot");
  dialog.innerHTML = `
    <div class="image-viewer__frame">
      <button class="image-viewer__close" type="button">Close</button>
      <img class="image-viewer__image" alt="">
    </div>
  `;

  document.body.append(dialog);

  const closeButton = dialog.querySelector(".image-viewer__close");
  const fullImage = dialog.querySelector(".image-viewer__image");

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  screenshotTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const image = trigger.querySelector("img");

      if (!image || image.classList.contains("is-hidden")) {
        return;
      }

      fullImage.src = image.currentSrc || image.src;
      fullImage.alt = image.alt;
      dialog.showModal();
    });
  });
}
