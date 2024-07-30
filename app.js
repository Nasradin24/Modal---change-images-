let popup = document.getElementById("popup");
let images = document.querySelectorAll(".images img");
let currentIndex = 0;

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

function updateImage() {
    images.forEach((img, index) => {
        img.style.display = index == currentIndex ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

updateImage();