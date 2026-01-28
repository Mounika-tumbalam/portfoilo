// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll animations for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-on-scroll");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all skill cards and project cards
document
  .querySelectorAll(".skill-card, .project-card, .info-card")
  .forEach((card) => {
    observer.observe(card);
  });
