randomCocktail();
document.getElementById("cocktail-button").addEventListener("click", randomCocktail);


function randomCocktail() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(
            function (response) {
                if (response.status !== 200) {
                    return;
                }
                response.json().then(function (data) {
                    //console.log(data)
                    displayRandomCocktail(data);
                });
            }
        )
}



// function displayRandomCocktail(cocktail) {
//     console.log(cocktail.drinks[0].strDrink);

//     var drinkArea = document.querySelector("#drink-area");
//     drinkArea.innerHTML = "";

//     var drinkName = document.createElement("h3");
//     drinkName = cocktail.drinks[0].strDrink;

//     drinkArea.append(drinkName);

//     var img = document.createElement("img");
//     img.src = cocktail.drinks[0].strDrinkThumb;

//     drinkArea.append(img)
        
//     for(var i=1; i<15; i++) {
//         console.log(i)
        
//         if(cocktail.drinks[0][`strMeasure${i}`] == null || cocktail.drinks[0][`strIngredient${i}`] == null){ break;}
        
//         var ingredient = document.createElement("h5");
        
//         ingredient = cocktail.drinks[0][`strIngredient${i}`] + ' : ' +cocktail.drinks[0][`strMeasure${i}`];
//         drinkArea.append(ingredient);
//     }
    
//     var instructions = document.createElement("h6");
//     instructions = cocktail.drinks[0].strInstructions;

//     drinkArea.append(instructions);
    
    
// }



// Ingredient list- trial 1:

/*var ingredient1 = document.createElement("h5");
    ingredient1.innerHTML = cocktail.drinks[0].strMeasure1 + cocktail.drinks[0].strIngredient1;
    drinkArea.append(ingredient1);
    
    var ingredient2 = document.createElement('h5');
    ingredient2.innerHTML = cocktail.drinks[0].strMeasure2 + cocktail.drinks[0].strIngredient2;
    drinkArea.append(ingredient2);

    var ingredient3 = document.createElement('h5');
    ingredient3.innerHTML = cocktail.drinks[0].strMeasure3 + cocktail.drinks[0].strIngredient3;
    drinkArea.append(ingredient3);

    var ingredient4 = document.createElement('h5');
    ingredient4.innerHTML = cocktail.drinks[0].strMeasure4 + cocktail.drinks[0].strIngredient4;
    drinkArea.append(ingredient4);
    
    var ingredient5 = document.createElement('h5');
    ingredient5.innerHTML = cocktail.drinks[0].strMeasure5 + cocktail.drinks[0].strIngredient5;
    drinkArea.append(ingredient5);

    var ingredient6 = document.createElement('h5');
    ingredient6.innerHTML = cocktail.drinks[0].strMeasure6 + cocktail.drinks[0].strIngredient6;
    drinkArea.append(ingredient6);

    var ingredient7 = document.createElement('h5');
    ingredient7.innerHTML = cocktail.drinks[0].strMeasure7 + cocktail.drinks[0].strIngredient7;
    drinkArea.append(ingredient7);

    var ingredient8 = document.createElement('h5');
    ingredient8.innerHTML = cocktail.drinks[0].strMeasure8 + cocktail.drinks[0].strIngredient8;
    drinkArea.append(ingredient8);

    var ingredient9 = document.createElement('h5');
    ingredient9.innerHTML = cocktail.drinks[0].strMeasure9 + cocktail.drinks[0].strIngredient9;
    drinkArea.append(ingredient9);

    //if(strMeasure1 === null || strMeasure2 === null || strMeasure3 === null || strMeasure4 === null || strMeasure5 === null || strMeasure6 === null || strMeasure7 === null || strMeasure8 === null || strMeasure9 === null){
       // element.setAttribute("hidden", true)
    }

   // var measure7 = JSON.stringify(cocktail.drinks[0].strMeasure7);
   // console.log(measure7)
   //if(measure7 == null){
   //     measure7.style.display = 'none';
   // }
    
    //var measure1 = cocktail.drinks[0].strMeasure1;
    //console.log(measure1)
   // */