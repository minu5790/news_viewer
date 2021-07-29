import React from 'react';
import CategoriesBlock from './CategoriesBlock';

const Categories = () => {
    const categorires =[
        {
            name: 'all',
            text: '뉴스홈'
        },
        {
            name: 'business',
            text: '비즈니스'
        },{
            name: 'entertainment',
            text: '엔터테인먼트'
        },{
            name: 'health',
            text: '건강'
        },{
            name: 'science',
            text: '과학'
        },
        {
            name: 'sports',
            text: '스포츠'
        },
        {
            name: 'technology',
            text: '기술'
        },
    ]
    return (
        <CategoriesBlock>
            <div className="category">
                <ul>
                    {categorires.map(categori=>(
                        <li key={categori.name}>{categori.text}</li>
                    ))}
                </ul>
            </div>
        </CategoriesBlock>
    )
}

export default Categories;