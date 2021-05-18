import { Provider } from 'react-redux';

import { store } from '../state';
import ReposList from './repos/ReposList';

function App() {
   return (
      <Provider store={store}>

         <main>

            <h1>Search for packages</h1>
            <ReposList />

         </main>
      </Provider>

   );
}

export default App;