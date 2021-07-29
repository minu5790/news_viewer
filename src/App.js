import React from 'react';
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import NewsList from './components/newsList/NewsList';


const App=({news})=> {

  return (
    <>
      <Header/>
      <Categories/>
      <NewsList news={news}/>
    </>
  );
}

export default App;
