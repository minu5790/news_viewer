import React from 'react';
import './App.css';
import NewsList from './components/newsList/NewsList';

const App=({news})=> {

  return (
    <>
      <NewsList news={news}/>
    </>
  );
}

export default App;
