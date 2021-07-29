import React from 'react';
import HeaderBlock from './HeaderBlock';

const Header = () => {
    
    return(
        <HeaderBlock>
            <header>
                <h1>
                    <a href="#" className="header__news">뉴스</a>
                </h1>
            
                <div className="header__search">
                    <input  className="searchInput" type="text" placeholder="Search.." ></input>
                    <button className="searchBtn" type="submit">
                        <img className="searchImg" src="\images\search.png" alt="search" />
                    </button>
                </div>
            
            </header>
        </HeaderBlock>
    )
}

export default Header