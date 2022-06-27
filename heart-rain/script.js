function addHeart () {
 const heart = document.createElement("div");
 heart.innerHTML = "&hearts;";
 heart.classList.add("active") ;
 document.body.appendChild(heart);
 heart.style.left = Math.random() * 100 + "vw";
}

setInterval(addHeart, 200);