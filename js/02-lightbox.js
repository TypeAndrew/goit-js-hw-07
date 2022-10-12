import { galleryItems } from './gallery-items.js';
//import * as basicLightbox from '/node_modules/basiclightbox/src/scripts/main.js'

let galleryEl = document.querySelector(".gallery");
galleryEl.classList.add("gallery");


function initGallery() {

    galleryItems.forEach(element => {


        let galleryLinkEl = document.createElement("a");

        galleryLinkEl.classList.add("gallery__item");
        galleryLinkEl.setAttribute("href", element.original);
        galleryEl.append(galleryLinkEl);

        let imgEl = document.createElement("img");
        imgEl.classList.add("gallery__image");
        imgEl.setAttribute("src", element.preview);
        imgEl.setAttribute("alt", element.description);

        galleryLinkEl.append(imgEl);



    });
};

initGallery();

galleryEl.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {


        var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

        instance.show()


    } else {
        console.log("border!!!!");
    }

});