const roles = [
  "Full Stack Developer for Product Teams",
  "Next.js + React Performance Builder",
  "Clean Architecture and Reliable Delivery",
  "Conversion-Focused UI Problem Solver",
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const target = document.getElementById("typing");
  if (!target) {
    return;
  }

  current = roles[i];

  if (isDeleting) {
    target.textContent = current.substring(0, j--);
  } else {
    target.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in"));
}
