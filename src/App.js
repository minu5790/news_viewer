
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const news_apiKey = process.env.REACT_APP_API_KEY;

  const onClick = async() =>{
    try{
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${news_apiKey}`
      );

      setData(res.data);
    }catch (e){
      console.log(e);
    }
  }

  return (
    <>
      <button onClick={onClick}>불러오기</button>

      {data && <textarea rows={7} value= {JSON.stringify(data,null,2)} readOnly={true} />}
    </>
  );
}

export default App;
