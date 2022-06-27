const text = "Never give up. The good things will come";
let index = 0;
function autoRun () {
    document.body.innerText = text.slice(0 , index);
    index++;
    if (index > text.length - 1) {
        index = 0;
    }
}
setInterval(autoRun, 100);

