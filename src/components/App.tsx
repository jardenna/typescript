import { useState } from 'react';

function App() {
  const [first, setFirst] = useState('d');

  return (
    <article>
      <main className="container">
        {first}
        <button onClick={() => setFirst('4')}>klik</button>
      </main>
    </article>
  );
}

export default App;
