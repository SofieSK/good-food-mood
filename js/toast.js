const toastContainer = document.querySelector(".toast");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/37";


async function getToast() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    toastContainer.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getToast();
