const lasagnaContainer = document.querySelector(".lasagna");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/33";


async function getLasagna() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    lasagnaContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getLasagna();