const pizzaContainer = document.querySelector(".pizza");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/31";


async function getPizza() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    pizzaContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getPizza();