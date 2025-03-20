document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function moveCarousel() {
        items.forEach((item, i) => {
            item.classList.remove("active");
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });

        items[index].classList.add("active");
        index = (index + 1) % items.length;
    }

    setInterval(moveCarousel, 3000); // Cambio cada 3 segundos
});
