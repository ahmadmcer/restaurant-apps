import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favourites = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favourites Restaurant</h2>
        <div id="restaurants" class="restaurant-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
        <div class="restaurant-item__not-found">
          <h3>Tidak ada favourite restaurant untuk ditampilkan</h3>
        </div>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourites;
