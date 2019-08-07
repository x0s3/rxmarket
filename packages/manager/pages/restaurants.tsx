import { Input } from 'antd';
import { GET_RESTAURANTS } from 'core/src/graphql/querys';
import React from 'react';
import { useQuery } from 'react-apollo';
import { MainLayout } from '../components/Layout';

const { Search } = Input;

const Restaurants = React.memo(() => {
  const { data, error, loading } = useQuery(GET_RESTAURANTS);
  return (
    <MainLayout>
      <Search
        placeholder={'Search specific restaurant'}
        onSearch={value => console.log(value)}
        onChange={value => console.log(value.target.value)}
        style={{ width: 200 }}
      />
      {data.getRestaurants && data.getRestaurants.length > 0 && (
        <h1>LETS GOOOOOOOO</h1>
      )}
    </MainLayout>
  );
});

export default Restaurants;
