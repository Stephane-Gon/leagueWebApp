import AllChampions from './features/champions/AllChampions';
import HomePage from './features/home/homePge';

const Routes = [
  {
    key: 'homepage',
    name: 'homepage',
    path: '/',
    component: HomePage
  },
  {
    key: 'champions',
    name: 'champions',
    path: '/champions',
    component: AllChampions
  },
]

export default Routes;