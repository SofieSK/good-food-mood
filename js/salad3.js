const salad3Container = document.querySelector(".salad3");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/23";


async function getSalad3() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    salad3Container.innerHTML = `<h1">${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getSalad3();