const images = [
    {
        url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryRef = document.querySelector("#gallery");
galleryRef.style.display = "flex";
galleryRef.style.flexWrap = "wrap";
galleryRef.style.marginTop = "-30px";
galleryRef.style.marginLeft = "-30px";

const listGalleryTemp = [];
images.forEach(item => {
    const liElem = document.createElement("li");
    liElem.style.marginLeft = "30px";
    liElem.style.marginTop = "30px";
    liElem.insertAdjacentHTML('afterbegin', `<img src="${item.url}" alt="${item.alt}" style= "display: block" width="350" height="250"></img>`);
    listGalleryTemp.push(liElem)
})

galleryRef.append(...listGalleryTemp)
