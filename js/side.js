const sideContainer = document.querySelector(".side");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/45";


async function getSide() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    sideContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getSide();
