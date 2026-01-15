let gelleryItems = document.querySelectorAll('.gallery-item');
let lightboxImage = document.querySelector('#lightbox-image');
let closeBtn = document.querySelector('#close-btn');
let lightbox = document.querySelector('.lightbox');

gelleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.src.replace('-thumbnail', '');
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImage && e.target !== closeBtn) {
    lightbox.style.display = 'none';
  }
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
