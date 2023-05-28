const pancakeContainer = document.querySelector(".pancake");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/43";


async function getPan() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    pancakeContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getPan();
