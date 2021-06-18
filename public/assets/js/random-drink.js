// Find results

var drinkNameEl = document.getElementById('name');
var drinkIngredientEl = document.getElementById('ingredient');
var drinkDirectionEl = document.getElementById('direction')

function displayRandomCocktail(cocktail) {
    console.log(cocktail.drinks[0].strDrink);

    drinkNameEl.innerHTML="";
    drinkIngredientEl.innerHTML="";
    drinkDirectionEl.innerHTML="";

    var drinkName = document.createElement("h3");
    drinkName = cocktail.drinks[0].strDrink;
    drinkNameEl.append(drinkName);

    var drinkImg = document.getElementById("drink-img");
    drinkImg.setAttribute('src', cocktail.drinks[0].strDrinkThumb);
        
    for(var i=1; i<15; i++) {
        console.log(i)
        
        if(cocktail.drinks[0][`strMeasure${i}`] == null || cocktail.drinks[0][`strIngredient${i}`] == null){ break;}
        
        var ingredient = document.createElement("p");
        
        ingredient = cocktail.drinks[0][`strIngredient${i}`] + ' : ' +cocktail.drinks[0][`strMeasure${i}`];
        drinkIngredientEl.append(ingredient);
    }
    
    var instructions = document.createElement("p");
    instructions = cocktail.drinks[0].strInstructions;
    drinkDirectionEl.append(instructions);   
}