const myApi = "https://api.tvmaze.com";
let container = document.getElementById("container");
let searchBtn = document.getElementById("searchBtn")
let searchInp = document.getElementById("searchInp")

async function getNewApi(api,str) {
  try {
    return await fetch(`${api}/search/shows?q=",${str}`).then((response) => response.json());
  } catch (error) {
    return error;
  }
}

searchBtn.onclick = () => {
    container.innerHTML = "";
    getNewApi(myApi , searchInp.value).then((res) => {
        for (let i = 0; i < res.length; i++) {
            container.innerHTML +=
             `<div class="movieCard">
            <img src="${res[i].show.image.original}">
            <h1>${res[i].show.name}</h1>
            <p>${res[i].show.premiered}</p>
            </div>`
        }
      });
};

{/* <p>${res[i].show.summary}</p> */}
