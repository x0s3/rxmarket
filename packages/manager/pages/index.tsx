import { GET_RESTAURANTS } from 'core/src/graphql/querys';
import { useState } from 'react';
import { useQuery } from 'react-apollo';
import { MainLayout } from '../components/Layout';

function Home(): React.ReactElement {
  const [counter, setCounter] = useState<number>(0);
  const { data, error, loading } = useQuery(GET_RESTAURANTS);

  // if (error) return <h1>Error fetching data</h1>;

  return (
    <MainLayout>
      <h1>Welcome to RxMarket Manager SSR</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => setCounter(c => c + 1)}>INCREMENT</button>
      {data.getRestaurants && data.getRestaurants.length > 0 && (
        <h1>LETS GOOOOOOOO</h1>
      )}
    </MainLayout>
  );
}

export default Home;
