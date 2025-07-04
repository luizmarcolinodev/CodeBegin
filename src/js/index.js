const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');


openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});
