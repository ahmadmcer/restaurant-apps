/* eslint-disable no-undef */
import { itsActsAsFavouriteRestaurantModel } from './contract/favouriteRestaurantContract';
import FavouriteRestaurantIdb from '../src/scripts/data/favourite-restaurant-idb';

describe('Favourite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavouriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itsActsAsFavouriteRestaurantModel(FavouriteRestaurantIdb);
});
