import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <div class="content">
        <div class="hero">
          <div class="hero__image">
            <picture>
              <source media="(max-width: 600px)" srcset="./images/heros/hero-image-small.jpg">
              <img class="lazyload" src="./images/heros/hero-image-large.jpg" alt="Hero Image">
            </picture>
          </div>
          <div class="hero__inner">
            <h1 class="hero__heading">
              Find Your Favourite Restaurant
            </h1>
            <p class="hero__description">
              Find your favourite restaurant and enjoy your meal
            </p>
          </div>
        </div>
        <div class="restaurants">
          <h2 class="content__heading">Explore Restaurant</h2>
          <div id="restaurants" class="restaurant-list">
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const lists = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    lists.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
