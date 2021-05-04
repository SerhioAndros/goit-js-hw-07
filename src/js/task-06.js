const inputRef = document.querySelector("#validation-input");

const classCheck = function (addClass, removeClass) {
    inputRef.classList.add(addClass);
    inputRef.classList.remove(removeClass);
};

inputRef.addEventListener("blur", (e) => {
    if (inputRef.value.length !== 6) {
        classCheck("invalid", "valid");
    }
    else classCheck("valid", "invalid");
});
