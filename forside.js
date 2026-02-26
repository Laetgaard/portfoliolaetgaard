const btn = document.querySelector('.burger');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
});

document.querySelectorAll(".case-card").forEach((card) => {
    const track = card.querySelector(".slides-track");
    const slides = card.querySelectorAll(".slide");
    const nextBtn = card.querySelector(".next-btn");
    const prevBtn = card.querySelector(".prev-btn");

    if (!track || !nextBtn || !prevBtn || slides.length === 0) return;

    let index = 0;

    function showSlide(i) {
        track.style.transform = `translateX(-${slides[i].offsetLeft}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index++;
        if (index >= slides.length) index = 0;
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) index = slides.length - 1;
        showSlide(index);
    });
});
