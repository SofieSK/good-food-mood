const salad1Container = document.querySelector(".salad1");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/25";


async function getSalad1() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    salad1Container.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getSalad1();