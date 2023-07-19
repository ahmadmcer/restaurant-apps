/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import { itsActsAsFavouriteRestaurantModel } from './contract/favouriteRestaurantContract';

let favouriteRestaurants = [];

const FavouriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favouriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurants() {
    return favouriteRestaurants;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favouriteRestaurants
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favouriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus restaurant dengan meng-copy restaurant yang ada
    // kecuali restaurant dengan id == id
    favouriteRestaurants = favouriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favourite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favouriteRestaurants = []);

  itsActsAsFavouriteRestaurantModel(FavouriteRestaurantArray);
});
