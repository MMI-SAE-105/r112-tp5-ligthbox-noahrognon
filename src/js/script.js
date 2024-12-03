

document.addEventListener('DOMContentLoaded', () => {
    const lightBox = document.querySelector('#lightbox');
    const lightBoxImage = lightBox.querySelector('img');
    const thumbnails = document.querySelectorAll('ul li img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            lightBoxImage.src = thumbnail.dataset.fullImg;
            lightBox.showModal();
        });
    });

    lightBox.addEventListener('click', () => {
        lightBox.classList.add('sortie');
        lightBox.addEventListener('animationend', () => {
            lightBox.classList.remove('sortie');
            lightBox.close();
        }, { once: true });
    });
});
