const refs = {
    inputRef: document.querySelector("#font-size-control"),
    textRef: document.querySelector("#text")
};

refs.textRef.setAttribute("style", `font-size: ${+refs.inputRef.value}px`);

refs.inputRef.addEventListener("input", (e) => {
    refs.textRef.setAttribute("style", `font-size: ${+refs.inputRef.value}px`)
});