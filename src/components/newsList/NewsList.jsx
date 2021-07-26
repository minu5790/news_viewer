import React, { useEffect, useState } from 'react';
import NewsListBlock from './NewsListBlock';
import NewsItem  from './NewsItem';
import axios from 'axios';


const NewsList = () => {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);

    const news_apiKey = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            try{
                const res = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${news_apiKey}`
                )
                setNews(res.data.articles);

            }catch(e){
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    },[])

    if (loading) {
        return <>대기중</>
    }

    if(!news){
        return null;
    }

    return(
        <NewsListBlock>
            {news.map(newsItem=>(
                <NewsItem key={newsItem.url} article={newsItem}/>
            ))}
        </NewsListBlock>
    )
}

export default NewsList;