import React from 'react';
import './App.css';
import Header from './components/header/Header';
import NewsList from './components/newsList/NewsList';

const App=({news})=> {

  return (
    <>
      <Header/>
      <NewsList news={news}/>
    </>
  );
}

export default App;
