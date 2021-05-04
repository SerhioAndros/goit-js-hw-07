const refs = {
    controls: document.querySelector("#controls"),
    inputRef: document.querySelector("#controls input"),
    createBtn: document.querySelector("#controls button[data-action='render']"),
    clearBtn: document.querySelector("#controls button[data-action='destroy']"),
    collection: document.querySelector("#boxes")
};

const gallTmp = [];

const colorRandomizer = function () {
    const randomColor = [];
    for (let j = 0; j < 4; j++) {
        randomColor.push(Math.floor(Math.random() * (256 - 0) + 0));
    };
    return randomColor;
};

const createBoxes = function (amount) {
    for (let i = +amount; i > 0; i--) {
        const objTmp = document.createElement("div");
        let size = 30 + ((+amount - i) * 10);
        objTmp.setAttribute("style", `background-color: rgb(${colorRandomizer()}); width: ${size}px; height: ${size}px`);
        gallTmp.push(objTmp);
    };
};

const deleteBoxes = function () {
    gallTmp.splice(0, gallTmp.length);
    while (refs.collection.querySelector("#boxes div")) {
    refs.collection.querySelector("#boxes div").remove();
    }
};


refs.createBtn.addEventListener('click', (e) => {
    createBoxes(refs.inputRef.value);
    refs.collection.append(...gallTmp);
});

refs.clearBtn.addEventListener('click', (e) => {
    deleteBoxes();
})