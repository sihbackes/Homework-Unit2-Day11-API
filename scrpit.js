let cards1 = document.getElementById("cards1");
let cards2 = document.getElementById("cards2");
let cards3 = document.getElementById("cards3");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "47b90c0b15msh1f32277e69c01c9p123c88jsn0c5b7d2ef6ab",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pinkfloyd", options)
  .then((response) => response.json())
  .then((pinkfloyd) => {
    for (item of pinkfloyd.data) {
      cards1.innerHTML += `
      <div class="col mb-4">
      <div class="card mb-3">
      <img src=${item.artist.picture} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title truncate">${item.title}</h5>
      </div>
      </div>
    </div>`;
    }
  })
  .catch((err) => console.error(err));

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft%20punk", options)
  .then((response) => response.json())
  .then((daftpunk) => {
    for (item of daftpunk.data) {
      cards2.innerHTML += `
      <div class="col mb-4">
      <div class="card mb-3">
      <img src=${item.artist.picture} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title truncate">${item.title}</h5>
      </div>
      </div>
    </div>`;
    }
  })
  .catch((err) => console.error(err));

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
  .then((response) => response.json())
  .then((metallica) => {
    for (item of metallica.data) {
      cards3.innerHTML += `
      <div class="col mb-4">
      <div class="card mb-3">
      <img src=${item.artist.picture} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title truncate">${item.title}</h5>
      </div>
      </div>
    </div>`;
    }
  })
  .catch((err) => console.error(err));
