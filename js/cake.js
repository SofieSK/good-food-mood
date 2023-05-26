const cakeContainer = document.querySelector(".cake");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts?per_page=100";


async function getCake() {

    const response = await fetch(url);
    const results = await response.json();
    createHTML(results);

}

getCake();

function createHTML(cake) {
    cake.forEach(function (cake) {
        console.log(cake);
        cakeContainer.innerHTML += `<h2>${cake.title.rendered}</h2><p>${cake.content.rendered}</p>`
    })
}

