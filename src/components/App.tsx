import { Provider } from 'react-redux';
import { store } from '../state';

import ReposList from './ReposList';

function App() {
   return (
      <Provider store={store}>
         <main className='container'>
            <h1> Search for a package</h1>
            <ReposList />
         </main>
      </Provider>

   );
}

export default App;