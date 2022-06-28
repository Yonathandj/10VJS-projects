function colorChanger () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`
}
setInterval(colorChanger, 250);