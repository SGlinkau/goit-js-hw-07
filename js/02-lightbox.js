import { galleryItems } from "./gallery-items.js";
// Change code below this line

const img = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`
  )
  .join("");

img.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});