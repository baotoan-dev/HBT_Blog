// main.js - Portfolio IT chuyên nghiệp

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! (Demo, hãy thay thế bằng xử lý thực tế)");
    this.reset();
  });
