/**
 * DOM Nodes
 */

export const common = {
  clearLoader: loader => {
    loader.parentElement.removeChild(loader);
  },
  renderLoader: (parent, loader) => {
    parent.insertAdjacentHTML('afterbegin', loader);
  }
};

export const components = {
  ingredient: ing => `
    <li class="recipe__item">
      <svg class="recipe__icon">
        <use href="img/icons.svg#icon-check"></use>
      </svg>
      
      <div class="recipe__count">${ing.count}</div>
      
      <div class="recipe__ingredient">
        <span class="recipe__unit">${ing.unit}</span>${ing.ingredient}
      </div>
    </li>`
  ,
  loader: className => `
    <div class="${className}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>`
  ,
  recipe: recipe => `
    <figure class="recipe__fig">
      <img src="${recipe.image_url}" alt="${recipe.title}" class="recipe__img">
      
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="img/icons.svg#icon-stopwatch"></use>
        </svg>
        
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.time}</span>
        
        <span class="recipe__info-text"> minutes</span>
      </div>
      
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="img/icons.svg#icon-man"></use>
        </svg>
        
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        
        <span class="recipe__info-text"> servings</span>

        <div class="recipe__info-buttons">
          <button class="btn-tiny">
            <svg>
              <use href="img/icons.svg#icon-circle-with-minus"></use>
            </svg>
          </button>
          
          <button class="btn-tiny">
            <svg>
              <use href="img/icons.svg#icon-circle-with-plus"></use>
            </svg>
          </button>
        </div>
      </div>

      <button class="recipe__love">
        <svg class="header__likes">
          <use href="img/icons.svg#icon-heart-outlined"></use>
        </svg>
      </button>
    </div>
        
    <div class="recipe__ingredients">
      <ul class="recipe__ingredient-list">
        ${recipe.ingredients}
      </ul>

      <button class="btn-small recipe__btn">
        <svg class="search__icon">
          <use href="img/icons.svg#icon-shopping-cart"></use>
        </svg>

        <span>Add to shopping list</span>
      </button>
    </div>
        
    <div class="recipe__directions">
      <h2 class="heading-2">How to cook it</h2>
          
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__by">${recipe.publisher}</span>. Please check out directions at their website.
      </p>
            
      <a class="btn-small recipe__btn" href="${recipe.source_url}" target="_blank">
        <span>Directions</span>
              
        <svg class="search__icon">
          <use href="img/icons.svg#icon-triangle-right"></use>
        </svg>
      </a>
    </div>`
  ,
  result: {
    recipe: recipe => `
        <li>
          <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
              <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
              <h4 class="results__name">${recipe.title}</h4>
              <p class="results__author">${recipe.publisher}</p>
            </div>
          </a>
        </li>`
  }
};

export const elements = {
  recipe: document.querySelector('.recipe'),
  search: {
    form: document.querySelector('.search'),
    input: document.querySelector('.search__field'),
    results: {
      list: document.querySelector('.results__list'),
      main: document.querySelector('.results')
    }
  }
};

export const namesInDOM = {
  loader: 'loader'
};