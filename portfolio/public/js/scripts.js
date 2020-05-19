const modalOverlay = document.querySelector('.overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', () => {
    const id = card.getAttribute('id');
    window.location.href = `/video?id=${id}`;
    modalOverlay.classList.add('active');
    modalOverlay.querySelector(
      'iframe'
    ).src = `https://youtube.com/embed/${id}`;
  });
}
