import './styles/index.scss';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/App';
import store from './state/store';

const wrapper = document.getElementById('root');
render(
   <Provider store={store}>
      <App />
   </Provider>,
   wrapper
);

if (module && module.hot) {
   module.hot.accept();
}