import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import News from './services/news';

const news_apiKey = process.env.REACT_APP_API_KEY;
const news = new News(news_apiKey);

ReactDOM.render(
  <React.StrictMode>
    <App news={news}/>
  </React.StrictMode>,
  document.getElementById('root')
);
