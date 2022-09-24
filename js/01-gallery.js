import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector(".gallery");
const gallaryMarkup = createGalleryCardMarkup(galleryItems);

divGallery.insertAdjacentHTML('beforeend', gallaryMarkup)

function createGalleryCardMarkup(galleryItems) {
return galleryItems.map(({preview, original, description}) =>

`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
}

divGallery.addEventListener('click', onImageClick);

function onImageClick (evt) {
    evt.preventDefault()
if (!evt.target.classList.contains('gallery__image')){
    return
}
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`); 
instance.show();

divGallery.addEventListener("keydown", (evt) => {
    if(evt.code === 'Escape') {
        instance.close();
    }
});
}

