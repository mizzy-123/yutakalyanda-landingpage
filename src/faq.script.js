let selectedIndex = -1;

let faqContent = document.getElementById("faq-content")

const faqs = faqContent.children;
Array.from(faqs).forEach((faq, index) => {
    faq.addEventListener("click", function(e) {
        if (selectedIndex === index) {
            faq.querySelector(".content").classList.remove("h-fit");
            faq.querySelector(".icon").classList.remove("rotate-180");
            selectedIndex = -1;
        } else {
            Array.from(faqs).forEach((f, i) => {
                f.querySelector(".content").classList.remove("h-fit");
                f.querySelector(".icon").classList.remove("rotate-180");
            })
            faq.querySelector(".content").classList.add("h-fit");
            faq.querySelector(".icon").classList.add("rotate-180");
            selectedIndex = index;
        }
    });
})