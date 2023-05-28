const bunsContainer = document.querySelector(".buns");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/35";


async function getBuns() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    bunsContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getBuns();