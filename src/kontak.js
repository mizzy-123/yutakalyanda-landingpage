let form = document.getElementById("myForm");
const alert_success = document.getElementById("alert-success");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert_success.classList.replace("right-[-1000px]", "right-[50px]");
    console.log("test")
})

alert_success.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    alert_success.classList.replace("right-[50px]", "right-[-1000px]")
})