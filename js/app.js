const yellowBtn = document.querySelector('.yellow-btn');

yellowBtn.addEventListener('click', (e) => {
  e.preventDefault();

  window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
});