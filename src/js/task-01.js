console.log(`В списке ${document.querySelectorAll("li.item").length} категории.`);
console.log("----------------------------------")

document.querySelectorAll("li.item").forEach(elem => {
    console.log(`- Категория: ${elem.querySelector("h2").textContent}`);
    console.log(`- Количество элементов: ${elem.querySelector("ul").children.length}`);
    console.log("----------------------------------")
});