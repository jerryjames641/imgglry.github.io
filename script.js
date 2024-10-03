// Image data
const images = [
    { src: "image1.jpg", alt: "Image 1" },
    { src: "image2.jpg", alt: "Image 2" },
    { src: "image3.jpg", alt: "Image 3" },
    { src: "image4.jpg", alt: "Image 4" },
    { src: "image5.jpg", alt: "Image 5" },
    { src: "image6.jpg", alt: "Image 6" },
    { src: "image7.jpg", alt: "Image 7" },
    { src: "image8.jpg", alt: "Image 8" },
    { src: "image9.jpg", alt: "Image 9" },
    { src: "image10.jpg", alt: "Image 10" },
   ];

// Load images into the gallery
const gallery = document.querySelector(".gallery");

images.forEach((image) => {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");

    const imageElement = document.createElement("img");
    imageElement.src = image.src;
    imageElement.alt = image.alt;

    imageCard.appendChild(imageElement);
    gallery.appendChild(imageCard);
});
