const cakeContainer = document.querySelector(".cake");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/47";


async function getCake() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    cakeContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getCake();




/*function createHTML(cake) {
    cake.forEach(function (cake) {
        console.log(cake);
        cakeContainer.innerHTML += `<h2>${cake.title.rendered}</h2><p>${cake.content.rendered}</p>`
    })
}

*/