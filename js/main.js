(function () {
  // Contact form handler is now in index.html inline script
  // Removed duplicate handler to avoid conflicts

  // Smooth fade text rotation effect (replaces Typed.js)
  const typewriterEl = document.getElementById("typewriter");
  if (typewriterEl) {
    const texts = [
      "Software Engineer | Problem Solver",
      "Software Engineer | Building scalable web applications",
      "Software Engineer | Lover of clean code & best practices",
      "Software Engineer | Always learning new technologies",
      "Software Engineer | Let's create something impactful!",
    ];
    let idx = 0;
    typewriterEl.textContent = texts[0];
    typewriterEl.classList.add("fade-in");
    setInterval(() => {
      typewriterEl.classList.remove("fade-in");
      typewriterEl.classList.add("fade-out");
      setTimeout(() => {
        idx = (idx + 1) % texts.length;
        typewriterEl.textContent = texts[idx];
        typewriterEl.classList.remove("fade-out");
        typewriterEl.classList.add("fade-in");
      }, 400); // fade out duration
    }, 3200); // total time per text
  }

  // Dark mode toggle
  const darkToggle = document.getElementById("darkModeToggle");
  // Auto-apply dark mode from cache
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (darkToggle) {
      darkToggle.classList.add("active");
      darkToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  } else {
    document.body.classList.remove("dark-mode");
    if (darkToggle) {
      darkToggle.classList.remove("active");
      darkToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }
  if (darkToggle) {
    darkToggle.addEventListener("click", function () {
      const isDark = document.body.classList.toggle("dark-mode");
      darkToggle.classList.toggle("active");
      darkToggle.innerHTML = isDark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem("theme", isDark ? "dark" : "light");
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
})();
