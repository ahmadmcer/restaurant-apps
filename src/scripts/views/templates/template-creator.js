import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <picture>
    <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}">
    <img class="restaurant__poster lazyload" src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="${restaurant.name}" />
  </picture>
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>⭐️ ${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
    <h4>Menu</h4>
    <p>Foods: ${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
    <p>Drinks: ${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.customerReviews.map((review) => `
      <div class="review">
        <h4>${review.name}</h4>
        <p>${review.review}</p>
        <p>${review.date}</p>
      </div>
    `).join('')}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <div class="restaurant-item__header__city">⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span> | ${restaurant.city}</div>
      <img class="restaurant-item__header__poster lazyload" src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" alt="${restaurant.name}" />
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant-item__content__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
