import './styles/index.scss';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './app/store';

import App from './components/App';


const wrapper = document.getElementById('root');
render(
   <Provider store={store}> <App /></Provider>,

   wrapper
);

if (module && module.hot) {
   module.hot.accept();
}