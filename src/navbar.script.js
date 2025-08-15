// navbar
let navbar_active = document.getElementById("navbar-active");
let show_navbar = document.getElementById("show-navbar");

navbar_active.addEventListener("click", (e) => {
  e.stopPropagation(); // Biar klik navbar gak dianggap klik luar
  e.preventDefault(); // Mencegah aksi default jika ada

  // Toggle class active
  show_navbar.classList.toggle("mobile:hidden");
})