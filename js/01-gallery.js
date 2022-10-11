import { galleryItems } from './gallery-items.js';



// Change code below this line


let galleryEl = document.querySelector(".gallery");
galleryEl.classList.add("gallery");





galleryItems.forEach(element => {

    let galleryItemEl = document.createElement("div");
    galleryItemEl.classList.add("gallery__item");
    galleryEl.append(galleryItemEl);

    let galleryLinkEl = document.createElement("a");
    galleryLinkEl.innerHTML = element.original;
    galleryLinkEl.classList.add("gallery__link");
    galleryItemEl.append(galleryLinkEl);

    let imgEl = document.createElement("img");
    imgEl.classList.add("gallery__image");
    imgEl.setAttribute("src", element.preview);
    imgEl.setAttribute("alt", element.description);
    imgEl.setAttribute("data-source", element.original);
    galleryLinkEl.append(imgEl);



});

galleryEl.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {
        console.log("ha ha ha");
        galleryEl.style.backgroundImage = event.target.currentSrc;

    } else {
        console.log("border!!!!");
    }

});



console.log(galleryItems);