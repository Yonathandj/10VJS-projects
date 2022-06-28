const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
    darkStyle()
})

function darkStyle () {
    document.body.classList.toggle("active");
}