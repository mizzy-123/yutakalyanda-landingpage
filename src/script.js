// Card model
const card_model = document.getElementById("card-model");
const items = card_model.querySelectorAll("div.relative");

const layouts = [
  'grid-cols-[2fr_1fr_1fr]',
  'grid-cols-[1fr_2fr_1fr]',
  'grid-cols-[1fr_1fr_2fr]'
];

let activeItem = null;

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); // Biar klik item gak dianggap klik luar

    // Reset semua layout & hover mati
    layouts.forEach(layout => card_model.classList.remove(layout));
    card_model.classList.remove("grid-cols-3");
    items.forEach(it => it.classList.remove("no-hover"));

    // Pasang layout sesuai index
    card_model.classList.add(layouts[index]);

    if (activeItem) {
        activeItem.classList.add("group/item1");
        activeItem.querySelector("img").classList.remove("-translate-x-[70%]")
        activeItem.querySelector("div.text-card").style.right = "-100%";
        activeItem.classList.remove("bg-golden-1")
        activeItem = null;
    }

    // Matikan hover di item aktif
    item.classList.remove("group/item1");
    item.querySelector("img").classList.add("-translate-x-[70%]");
    item.querySelector("div.text-card").style.right = "20px";
    item.classList.add("bg-golden-1");
    activeItem = item;
  });
});

// Klik di luar -> reset
document.addEventListener("click", () => {
  layouts.forEach(layout => card_model.classList.remove(layout));
  card_model.classList.add("grid-cols-3");

  if (activeItem) {
    activeItem.classList.add("group/item1");
    activeItem.querySelector("img").classList.remove("-translate-x-[70%]")
    activeItem.querySelector("div.text-card").style.right = "-100%";
    activeItem.classList.remove("bg-golden-1")
    activeItem = null;
  }
});


// keunggulan

