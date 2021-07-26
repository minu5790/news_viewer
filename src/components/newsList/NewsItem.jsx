import React from 'react';
import NewsItemBlock from './NewsItemBlock';
const NewsItem = ({article}) => {
    const {title, description, url, urlToImage} = article;
    console.log(article)
    return(
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank">
                        <img src={urlToImage} alt="thumbnail"/>
                    </a>
                </div>
            )}

            <div className="contents">
                <h2>
                    <a href={url} target="_blank">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}

export default NewsItem;