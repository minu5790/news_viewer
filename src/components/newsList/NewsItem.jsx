import React from 'react';
import NewsItemBlock from './NewsItemBlock';
const NewsItem = ({article}) => {
    const {title, description, url, urlToImage} = article;

    return(
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank">
                        <img src={urlToImage} className="thumbnail__img" alt="thumbnail"/>
                    </a>
                </div>
            )}

            <div className="contents">
                <h2 className="contents__title">
                    <a href={url} target="_blank" alt={title}>
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}

export default NewsItem;