import Restaurants from '../views/pages/restaurants';
import Favourites from '../views/pages/favourites';
import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurants, // default page
  '/restaurants': Restaurants,
  '/favourites': Favourites,
  '/detail/:id': Detail,
};

export default routes;
