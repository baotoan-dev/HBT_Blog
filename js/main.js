// main.js - Portfolio IT chuyên nghiệp

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! (Demo, hãy thay thế bằng xử lý thực tế)");
    this.reset();
  });

// Contact form demo
document
  .getElementById("contact-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! (Demo, hãy thay thế bằng xử lý thực tế)");
    this.reset();
  });

// Typewriter effect (nếu chưa có)
if (window.Typed && document.getElementById("typewriter")) {
  new Typed("#typewriter", {
    strings: [
      "Web Developer | Software Engineer",
      "Yêu thích UI/UX & Animation",
      "Đam mê công nghệ mới",
      "Sẵn sàng hợp tác dự án!",
    ],
    typeSpeed: 45,
    backSpeed: 30,
    backDelay: 1800,
    loop: true,
  });
}

// Dark mode toggle
const darkToggle = document.getElementById("darkModeToggle");
if (darkToggle) {
  darkToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    darkToggle.classList.toggle("active");
    darkToggle.innerHTML = document.body.classList.contains("dark-mode")
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  });
}

// Progress bar scroll
const progressBar = document.getElementById("progress-bar");
if (progressBar) {
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = percent + "%";
  });
}

// Parallax background
const parallaxBg = document.getElementById("parallax-bg");
if (parallaxBg) {
  window.addEventListener("scroll", function () {
    parallaxBg.style.transform = `translateY(${window.scrollY * 0.2}px)`;
  });
}

// Ripple effect for buttons
document.querySelectorAll(".ripple").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.className = "ripple-effect";
    const rect = btn.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// Scroll reveal animation (đã tắt để tránh lỗi ẩn nội dung)
