document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.burger');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });

    const slides = document.querySelectorAll(".slide");
    const track = document.querySelector(".slides-track");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let index = 0;

    function showSlide(i) {
        track.style.transform = `translateX(-${slides[i].offsetLeft}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        showSlide(index);
    });
});
