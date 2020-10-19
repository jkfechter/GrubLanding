function autoResizeDiv() {
    document.getElementById('left').style.height = window.innerHeight +'px';
    window.onresize = autoResizeDiv;
}
autoResizeDiv();