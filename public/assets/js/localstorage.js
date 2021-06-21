var movieInputEl = document.getElementById("movie-input");
var movieSaveEl = document.getElementById("film-save");
var liqInputEl = document.getElementById("drink-input");
var liqSaveEl = document.getElementById("liq-save");
var h3Title = document.querySelector("#showtitle")
var h3Liq = document.querySelector("#showdrink");



movieSaveEl.addEventListener('click', function(){
    localStorage.setItem('title', movieInputEl.value);

    titleDisplay();
})


function titleDisplay() {
    if (localStorage.getItem('title')){
        let title = localStorage.getItem('title');
        h3Title.textContent = `${title}`
    }
}



liqSaveEl.addEventListener('click', function(){
    localStorage.setItem('drink', liqInputEl.value);

    drinkDisplay();
})

function drinkDisplay() {
    if (localStorage.getItem('drink')){
        let drink = localStorage.getItem('drink');
        h3Liq.textContent = `${drink}`
    }
}