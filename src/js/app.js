const category = document.querySelector("#category");
const base_url = "http://localhost:3001";
const cards = document.querySelector(".cards");
const search = document.querySelector("#search-inpt");
const search_btn = document.querySelector(".search-btn"); 


function fetchData(url) {
    return axios.get(url)
        .then((res) => res.data);
}


function renderCards(data) {
    cards.innerHTML = '';
    data.forEach(item => {
        cards.innerHTML += `
            <div class="card">
                <figure>
                    <img src=${item.image} alt="">
                    <div class="par">
                        <p>${item.description}</p>
                    </div>
                </figure>
                <div class="title">
                    <h2>${item.title}</h2>
                </div>
            </div>
        `;
    });
}
function renderAllItems(data) {
    const allItems = [];
    data.footballs.forEach(item => allItems.push(item));
    data.basketballs.forEach(item => allItems.push(item));
    data.tennis.forEach(item => allItems.push(item));
    renderCards(allItems);
  }
category.addEventListener("change", () => {
    const selectedOption = category.value;

    if (selectedOption === "football") {
        fetchData(`${base_url}/footballs`)
            .then(data => renderCards(data))
            .catch(err => console.error(err));
    } else if (selectedOption === "basketball") {
        fetchData(`${base_url}/basketballs`)
            .then(data => renderCards(data))
            .catch(err => console.error(err));
    } else if (selectedOption === "tennis") {
        fetchData(`${base_url}/tennis`)
            .then(data => renderCards(data))
            .catch(err => console.error(err));
    } 
    if (selectedOption === "Select option") {
                init()
      }
});


function init (){
    fetchData(`${base_url}/allItems`)
    .then(data => renderAllItems(data[data.length - 1]))
    .catch(err => console.error(err));
}
search.addEventListener("input", () => {
    const searchText = search.value.toLowerCase();
    const allCards = document.querySelectorAll(".card");

    allCards.forEach((card) => {
        const title = card.querySelector(".title h2").textContent.toLowerCase();

        if (title.includes(searchText)) {
            card.classList.remove("hide");
            card.classList.add("show");
        } else {
            card.classList.remove("show");
            card.classList.add("hide");
        }
    });
});
document.addEventListener("DOMContentLoaded",()=>{
    init()
})