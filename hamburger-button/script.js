const button = document.getElementById("button");
button.addEventListener("click", () => {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("active");
    button.classList.toggle("left");
})

