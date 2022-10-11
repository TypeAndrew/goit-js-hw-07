import * as basicLightbox from '/node_modules/basiclightbox/src/scripts/main.js'

const instance = basicLightbox.create(`
    <div class="modal">
      <img src="assets/images/image.png" width="800" height="600">

    </div>
`);

instance.show()
console.log(galleryItems);