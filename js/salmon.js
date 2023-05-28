const salmonContainer = document.querySelector(".salmon");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/5";


async function getSalmon() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    salmonContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getSalmon();