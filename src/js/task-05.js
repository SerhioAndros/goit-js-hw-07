const refs = {
    inputRef: document.querySelector("#name-input"),
    textRef: document.querySelector("#name-output"),
};

refs.inputRef.addEventListener("input", (e) => {
    refs.textRef.textContent = refs.inputRef.value;
    if (refs.inputRef.value === "") refs.textRef.textContent = "незнакомец";
});