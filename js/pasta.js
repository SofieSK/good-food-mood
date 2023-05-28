const pastaContainer = document.querySelector(".pasta");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/29";


async function getPasta() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    pastaContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getPasta();