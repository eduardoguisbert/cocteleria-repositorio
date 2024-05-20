const btnsFavorite = document.querySelectorAll('.favorite');
const cocktailContainers = document.querySelectorAll('.cocktail-container');
let favorites = [];

// Actualizar la favorite list
const updateFavoritesLocalStorage = () => {
    localStorage.setItem('Favorites', JSON.stringify(favorites));
};

// Bajar los datos de localStorage a la lista para mostrar los cambios
const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem('Favorites');
    favorites = JSON.parse(storedFavorites);
    showHTML();
};

// Agregar o quitar de la favorite list
const toggleFavorite = cocktail => {
    const index = favorites.findIndex(
        element => element.id === cocktail.id
    );
    if (index != -1){
        favorites.splice(index,1);
        updateFavoritesLocalStorage();

    }else{
        favorites.push(cocktail);
        updateFavoritesLocalStorage();
    };
};

// Mostrar los cambios 
const showHTML = () => {
    cocktailContainers.forEach(cocktailContainer => {
        const cocktailId = cocktailContainer.dataset.cocktailId;
        const isFavorite = favorites.some(
            element => element.id === cocktailId);
        const favoritesIcon = cocktailContainer.querySelectorAll('.fa-heart');
        favoritesIcon.forEach(icon => icon.classList.toggle('active', isFavorite));
    });
};

btnsFavorite.forEach(button => {
    button.addEventListener('click', (event) => {
        const cocktailContainer = event.target.closest('.cocktail-container');
        const cocktail = {
            banner : cocktailContainer.querySelector('.cocktail-img').getAttribute('src'),
            name : cocktailContainer.querySelector('h1').textContent,
            id : cocktailContainer.dataset.cocktailId            
        };
        toggleFavorite(cocktail);
        showHTML();
    });
});

loadFavoritesFromLocalStorage();