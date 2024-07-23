document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const yearSpans = document.querySelectorAll(".year-slider span");
    const descriptions = document.querySelectorAll(".text-descriptions p");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "left", "right");
            yearSpans[i].classList.remove("active");
            descriptions[i].classList.remove("active");

            if (i === index) {
                slide.classList.add("active");
                yearSpans[i].classList.add("active");
                descriptions[i].classList.add("active");
                
            } else if (i === (index - 1 )) {
                slide.classList.add("left");
            } else if (i === (index + 1)) {
                slide.classList.add("right");
            }
        });

        // Scroll the year slider to keep the active year centered
        const activeYear = document.querySelector(".year-slider span.active");
        const yearSlider = document.querySelector(".year-slider");
        yearSlider.style.transform = `translateX(${-(activeYear.offsetLeft - (yearSlider.offsetWidth / 2) + (activeYear.offsetWidth / 2))}px)`;
    
    
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar, i) => {
        const correspondingYearSpan = yearSpans[i];
        bar.style.width = `${correspondingYearSpan.offsetWidth}px`;
        bar.style.left = `${correspondingYearSpan.offsetLeft}px`;
        bar.classList.toggle("active", i === index);
    });
    const activeProgressBar = document.querySelector(`.year-slider span.active + .progress-bar`);
    activeProgressBar.style.backgroundColor = "#630330";
    activeProgressBar.style.opacity = "1";

    // Remove the active class from other progress bars
    document.querySelectorAll(".progress-bar").forEach((bar) => {
        if (bar !== activeProgressBar) {
            bar.style.backgroundColor = "#808080";
            bar.style.opacity = "0.5";
        }
    })
    // Remove the active class from other progress bars
    document.querySelectorAll(".progress-bar").forEach((bar) => {
        if (bar !== progressBar) {
            bar.classList.remove("active");
        }
    });
    }

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    yearSpans.forEach((span) => {
        span.addEventListener("click", () => {
            const yearIndex = Array.prototype.indexOf.call(yearSpans, span);
            currentIndex = yearIndex;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex); // Initialize the carousel with the first slide
});
