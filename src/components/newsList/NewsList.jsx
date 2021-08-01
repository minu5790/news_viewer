import React, { useEffect, useState } from 'react';
import NewsListBlock from './NewsListBlock';
import NewsItem  from './NewsItem';
import CircularProgress from '@material-ui/core/CircularProgress';


const NewsList = ({news,category}) => {
    const [articles, setArticles] = useState(null);

    useEffect(()=>{
        
        const fetchData = async () =>{

            news.mostPopular(category).then(articles=>{
                setArticles(articles);
            });
            
        }
        fetchData();
    },[news,category])


    return(
        <NewsListBlock>
            {!articles ? <CircularProgress /> :articles.map(
                    article=>(<NewsItem key={article.url} article={article}/>))}
                
        </NewsListBlock>
    )
}

export default NewsList;