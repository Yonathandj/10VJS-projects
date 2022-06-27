const button = document.getElementById("notif");
const container = document.getElementById("container");
button.addEventListener("click", () => {
    update ();
})

function update () {
    const div = document.createElement("div");
    div.innerText = "Just never give up. The good things will come";
    div.classList.add("active");
    container.appendChild(div);
    
    setTimeout(() => {
        div.remove();
    }, 2000);
}