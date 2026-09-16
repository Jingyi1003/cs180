const fallbackText = (img) => {
  const text = img.dataset.placeholder || `Missing image: ${img.getAttribute("src")}`;
  const replacement = document.createElement("div");
  replacement.className = "missing-image";
  replacement.setAttribute("role", "img");
  replacement.setAttribute("aria-label", text);
  replacement.textContent = text;
  img.replaceWith(replacement);
};

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => fallbackText(img), { once: true });
});
