// Does not work :/



// find cocktail input
var searchDrinkEl = document.getElementById("drink");

// find results 
var drinkNameEl = document.getElementById('name');
var drinkIngredientEl = document.getElementById('ingredient');
var drinkDirectionEl = document.getElementById('direction');


// doesn't work :(

function apiDrink() {
    var drinkSearch = searchDrinkEl.value;
    console.log(drinkSearch);

    // fetch Api
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSearch)
    .then(function (response){
       console.log(response) 
       if (response.status !== 200){
            return;
            
        }
        response.json().then(function (data) {
            console.log(data)
            apiDrink(data);
        })
        
    

        drinkNameEl.innerHTML = "";
        drinkIngredientEl.innerHTML = "";
        drinkDirectionEl.innerHTML = "";

        var drinkName = document.createElement("h3")
        drinkName.textContent=response.strDrink
        drinkNameEl.appendChild(drinkName)

        var drinkImg = document.getElementById("drink-img");
        drinkImg.setAttribute('src', response.strDrinkThumb);

        var ingredient = document.createElement("p")
        ingredient = cocktail.drinks[0][`strIngredient${i}`] + ' : ' + cocktail.drinks[0][`strMeasure${i}`];
        drinkIngredientEl.append(ingredient);

    //     for (var i = 1; i < 15; i++) {
    //         console.log(i)

    //         if (cocktail.drinks[0][`strMeasure${i}`] == null || cocktail.drinks[0][`strIngredient${i}`] == null) { break; }

    //         var ingredient = document.createElement("p");

    //         ingredient = cocktail.drinks[0][`strIngredient${i}`] + ' : ' + cocktail.drinks[0][`strMeasure${i}`];
    //         drinkIngredientEl.append(ingredient);


  
    //   }

    });
}
apiDrink();
document.getElementById('search-drink').addEventListener('click', apiDrink);
