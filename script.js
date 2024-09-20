const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-image');
        modalImage.src = imgSrc;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
