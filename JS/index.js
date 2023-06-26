const itemCart1 = document.getElementsByName("itemCart1")[0];
const itemCart2 = document.getElementsByName("itemCart2")[0];
const itemCart3 = document.getElementsByName("itemCart3")[0];

const imgCollection = [
  "/Images/food.1.png",
  "/Images/food.2.png",
  "/Images/food.3.png",
  "/Images/food.4.png",
  "/Images/food.6.png",
  "/Images/food.7.png",
  "/Images/food.8.png",
  "/Images/food.10.png",
  "/Images/food.11.png",
  "/Images/food.12.png",
  "/Images/food.13.png",
  "/Images/food.14.png",
  "/Images/food.15.png",
  "/Images/food.16.png",
  "/Images/food.17.png",
  "/Images/food.18.png",
  "/Images/food.20.png",
];

setInterval(() => {
  setTimeout(() => {
    itemCart1.style.transition = "all 2s ease";
    itemCart1.style.opacity = "1";
    let imgCollectionRandomIndex = Math.floor(Math.random() * (16 - 0 + 1)) + 0;
    itemCart1.src = imgCollection[imgCollectionRandomIndex];
  }, 1000);
  setTimeout(() => {
    itemCart1.style.opacity = "0";
  }, 4000);
}, 5000);

setInterval(() => {
  setTimeout(() => {
    itemCart2.style.transition = "all 2s ease";
    let imgCollectionRandomIndex = Math.floor(Math.random() * (16 - 0 + 1)) + 0;
    itemCart2.src = imgCollection[imgCollectionRandomIndex];
    itemCart2.style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    itemCart2.style.opacity = "0";
  }, 9000);
}, 10000);

setInterval(() => {
  setTimeout(() => {
    itemCart3.style.transition = "all 2s ease";
    let imgCollectionRandomIndex = Math.floor(Math.random() * (16 - 0 + 1)) + 0;
    itemCart3.src = imgCollection[imgCollectionRandomIndex];
    itemCart3.style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    itemCart3.style.opacity = "0";
  }, 5000);
}, 6000);
