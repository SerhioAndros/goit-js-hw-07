const refs = {
    spanRef: document.querySelector("#value"),
    decrBtnRef: document.querySelector('button[data-action="decrement"]'),
    incrBtnRef: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

const incr = () => {
    counterValue++;
    refs.spanRef.textContent = counterValue;
};
const decr = () => {
    counterValue--;
    refs.spanRef.textContent = counterValue;
};

refs.incrBtnRef.addEventListener("click", (e) => { incr() });
refs.decrBtnRef.addEventListener("click", (e) => { decr() });

