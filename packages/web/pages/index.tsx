import { useState } from 'react';

function Home(): React.ReactElement {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <h1>Welcome to RxMarket Manager SSR</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => setCounter(c => c + 1)}>INCREMENT</button>
    </div>
  );
}

export default Home;
