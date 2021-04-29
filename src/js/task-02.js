const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingListTemp = [];

ingredients.forEach(item => {
    const liTemp = document.createElement("li");
    liTemp.textContent = item;
    ingListTemp.push(liTemp)
});

document.querySelector("#ingredients").append(...ingListTemp)