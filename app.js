const title = document.querySelector(".card__title");
const img = document.getElementById("img");
const description = document.querySelector(".card__description");
const button = document.getElementById("btn-random");

button.addEventListener("click",()=>{
  fetch("https://api.punkapi.com/v2/beers/random")
  .then(res=>res.json())
  .then(data=>{
    title.innerHTML = data[0].name;
    img.src = data[0].image_url;
    description.innerHTML = data[0].description;
  })
})
