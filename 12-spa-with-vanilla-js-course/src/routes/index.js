import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
}

const router = async() => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  const hash = getHash();
  const route = await resolveRoutes(hash);
  const render = routes[route] ? routes[route] : Error404;

  header.innerHTML = await Header();
  content.innerHTML = await render();
};

export default router;