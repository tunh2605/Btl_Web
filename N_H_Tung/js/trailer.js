// Lấy các phần tử từ DOM
const trailerBtn = document.getElementById('trailerBtn');
const closeBtn = document.getElementById('closeBtn');
const trailerContainer = document.getElementById('trailer-vid-film');
const modalOverlay = document.getElementById('modalOverlay');

// Hiển thị modal
trailerBtn.addEventListener('click', () => {
    trailerContainer.style.display = 'block';
    modalOverlay.style.display = 'block';
});

// Ẩn modal khi nhấn nút đóng
closeBtn.addEventListener('click', () => {
    closeModal();
});

// Hàm ẩn modal
function closeModal() {
    trailerContainer.style.display = 'none';
    modalOverlay.style.display = 'none';
}
