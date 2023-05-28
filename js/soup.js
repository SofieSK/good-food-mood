const soupContainer = document.querySelector(".soup");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/39";


async function getSoup() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    soupContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getSoup();