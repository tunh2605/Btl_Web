const trailerBtn = document.getElementById('trailerBtn');
const closeBtn = document.getElementById('closeBtn');
const trailerContainer = document.getElementById('trailer-vid');
const modalOverlay = document.getElementById('modalOverlay');

trailerBtn.addEventListener('click', () => {
    trailerContainer.style.display = 'block';
    modalOverlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    closeModal();
});

function closeModal() {
    trailerContainer.style.display = 'none';
    modalOverlay.style.display = 'none';
}
