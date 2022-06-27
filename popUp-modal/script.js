const container = document.getElementById("container");
const open = document.getElementById("open");
const close = document.getElementById("close");
open.addEventListener("click", () => {
    container.style.display = "flex";
})

close.addEventListener("click", () => {
    container.style.display = "none";
})