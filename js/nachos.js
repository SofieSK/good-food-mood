const nachosContainer = document.querySelector(".nachos");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/41";


async function getNachos() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    nachosContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getNachos();