document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // Lắng nghe sự kiện click vào icon
  menuIcon.addEventListener("click", function () {
    // Bật/tắt class active cho cả icon và menu
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });
});
