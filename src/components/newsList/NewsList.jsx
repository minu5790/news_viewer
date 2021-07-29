import React, { useEffect, useState } from 'react';
import NewsListBlock from './NewsListBlock';
import NewsItem  from './NewsItem';


const NewsList = ({news}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            news.mostPopular().then(articles=>setArticles(articles));
            setLoading(false);
        }
        fetchData();
    },[news])

    if (loading) {
        return <>대기중</>
    }

    if(!articles){
        return null;
    }

    return(
        <NewsListBlock>
            {articles.map(article=>(
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

export default NewsList;