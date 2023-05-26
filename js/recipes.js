const url = "http://myschoolprojectworld.no/goodfoodmood/wp-json/wp/v2/posts?per_page=100";
const recipeContainer = document.querySelector(".recipes");

async function getRecipes() {

    const response = await fetch(url);
    const results = await response.json();
    createHTML(results);

}

getRecipes();

function createHTML(recipes) {
    recipes.forEach(function (recipes) {
        console.log(recipes);
        recipeContainer.innerHTML +=
            `<a href="cake.html"${recipes.id}" > 
        <h2>${recipes.title.rendered}</h2>
        </a > `;
    })
}








/*<img src="${recipes.featuredmedia[0].href}" alt="${recipes.title.rendered}"></img>


/* const recipes = results;

 


/* recipesContainer.innerHTML = "";

 
 
 
 
 
for (let i = 0; i < recipes.length; i++) {
 console.log(recipes[i].title.rendered);




 recipesContainer.innerHTML += `< div class= "recipes" > ${ recipes[i].title.rendered }</div > `

}


}

getRecipes()*/


