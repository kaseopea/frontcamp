import App from '../appComponent';
import Home from '../components/Home/Home';
import PlipView from '../components/PlipView/PlipView';
import AuthorView from '../components/AuthorView/AuthorView';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/plip/:plipId',
        component: PlipView
      },
      {
        path: '/author/:username',
        component: AuthorView
      }
    ]
  }
];