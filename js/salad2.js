const salad2Container = document.querySelector(".salad2");
const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts/27";


async function getSalad2() {

    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    salad2Container.innerHTML = `<h1>${results.title.rendered}</h1><div class="content"${results.content.rendered}></div>`
}

getSalad2();
