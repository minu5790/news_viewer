import React from 'react';


const NewsItem = ({article}) => {
    const {title, description, url, urlToImage} = article;
    console.log(article)
    return(
        <>
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
        </>
    )
}

export default NewsItem;