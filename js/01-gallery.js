import { galleryItems } from './gallery-items.js';
// Change code below this line
galleryEl = document.querySelector(".gallery");
galleryItemEl = document.createElement("div");
galleryItemEl.classList.append("gallery__item");
galleryEl.append(galleryItemEl);
galleryLinkEl = document.createElement("a");


console.log(galleryItems);
