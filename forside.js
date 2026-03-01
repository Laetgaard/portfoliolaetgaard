console.log("JS connected");

// Burger menu toggle
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", (e) => {
    e.stopPropagation();
    burger.classList.toggle("active");
    menu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove("active");
        menu.classList.remove("open");
    }
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


