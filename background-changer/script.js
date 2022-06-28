function colorChanger () {
    const red = Math.floor(Math.random() * 250);
    const green = Math.floor(Math.random() * 250);
    const blue = Math.floor(Math.random() * 250);
    document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`
}
setInterval(colorChanger, 100);