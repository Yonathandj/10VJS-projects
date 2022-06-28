const img = document.getElementById("img");
let index = 1;
function autoChange () {
    if (index > 3) {
        index = 1;
    }
    img.src = `assets/${index}.jpg`;
    index++;
}
setInterval(autoChange, 2000)