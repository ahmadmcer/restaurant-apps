/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada favourite restaurant untuk ditampilkan', '.restaurant-item__not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada favourite restaurant untuk ditampilkan', '.restaurant-item__not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content__title');
  const firstRestaurant = locate('.restaurant-item__content__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourites');
  I.seeElement('.restaurant-item__content__title');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content__title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
