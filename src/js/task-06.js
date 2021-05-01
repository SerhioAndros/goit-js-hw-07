const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (e) => {
    if (inputRef.value.length !== 6) {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
    };
    if (inputRef.value.length === 6) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid")
    };
});