const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        const zooomedContainer = document.createElement('div');
        zooomedContainer.classList.add('zoomed');

        const zoomedImage = document.createElement('img');
        zoomedImage.src = image.src;

        zooomedContainer.appendChild(zoomedImage);
        document.body.appendChild(zooomedContainer);

        zooomedContainer.addEventListener('click', () => {
            zooomedContainer.remove();
        })
    })
})