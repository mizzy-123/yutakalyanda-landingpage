const card_model = document.getElementById("card-model");
const items = card_model.querySelectorAll("div.relative");

const layouts = [
  'md:grid-cols-[2fr_1fr_1fr]',
  'md:grid-cols-[1fr_2fr_1fr]',
  'md:grid-cols-[1fr_1fr_2fr]'
];

let activeItem = null;

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();

    // Kalau mobile → tidak ada layout expand
    if (window.innerWidth < 768) return;

    // Kalau klik item yang sama → reset
    if (activeItem === item) {
      resetAll();
      return;
    }

    // Reset layout & hover dulu
    layouts.forEach(layout => card_model.classList.remove(layout));
    card_model.classList.remove("md:grid-cols-3");
    items.forEach(it => {
      it.classList.add("group/item1");
      it.querySelector("img").classList.remove("-translate-x-[70%]");
      it.querySelector("div.text-card").style.right = "-100%";
      it.classList.remove("bg-golden-1");
    });

    // Pasang layout sesuai index
    card_model.classList.add(layouts[index]);

    // Matikan hover & set style di item aktif
    item.classList.remove("group/item1");
    item.querySelector("img").classList.add("-translate-x-[70%]");
    item.querySelector("div.text-card").style.right = "20px";
    item.classList.add("bg-golden-1");

    activeItem = item;
  });
});

items.forEach((item, index) => {
    // Tambahkan hover untuk setiap item
    item.addEventListener("click", () => {

        // Kalau bukan mobile → tidak ada aksi
        if (window.innerWidth >= 768) return;

        if (activeItem === item) {
            resetAll();
            return;
        }

        items.forEach(it => {
            it.classList.add("group/item1");
            it.querySelector("img").classList.remove("hidden");
            it.querySelector("div.small-card").classList.remove("hidden");
            it.querySelector("div.text-card").style.right = "-100%";
            it.classList.remove("bg-golden-1");
        });

        // Matikan hover & set style di item aktif
        item.classList.remove("group/item1");
        item.querySelector("img").classList.add("hidden");
        item.querySelector("div.small-card").classList.add("hidden");
        item.querySelector("div.text-card").style.right = "20px";
        item.classList.add("bg-golden-1");

        activeItem = item;
    });
})

// Klik di luar -> reset
document.addEventListener("click", () => {
  resetAll();
});

function resetAll() {
  layouts.forEach(layout => card_model.classList.remove(layout));
  card_model.classList.add("grid-cols-1", "md:grid-cols-3");

  if (activeItem) {
    activeItem.classList.add("group/item1");
    activeItem.querySelector("img").classList.remove("-translate-x-[70%]");
    activeItem.querySelector("img").classList.remove("hidden");
    activeItem.querySelector("div.small-card").classList.remove("hidden");
    activeItem.querySelector("div.text-card").style.right = "-100%";
    activeItem.classList.remove("bg-golden-1");
    activeItem = null;
  }
}
