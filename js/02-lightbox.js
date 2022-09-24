import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector(".gallery");
const gallaryMarkup = createGalleryCardMarkup(galleryItems);

divGallery.insertAdjacentHTML('beforeend', gallaryMarkup)

function createGalleryCardMarkup(galleryItems) {
return galleryItems.map(({preview, original, description}) =>

`<li class="gallety__item">
<a class="gallery__link" 
  href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}" 
  data-source="${original}"
  alt="${description}">
</a>
</li>`).join('');
}

lightbox = new SimpleLightbox ('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });

