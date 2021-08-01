import React, { useCallback, useState } from 'react';
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import NewsList from './components/newsList/NewsList';


const App=({news})=> {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category),[]);
  console.log(category)
  return (
    <>
      <Header/>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList news={news} category={category}/>
    </>
  );
}

export default App;
