import React from 'react';
import CategoriesBlock from './CategoriesBlock';
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

const Categories = ({category,onSelect}) => {
    
    return (
        <CategoriesBlock>
            <div className="category">
                <ul>
                    {categorires.map(c=>{
                        const li_className = category===c.name ? 'active' : 'no_active';
                        return <li className={li_className} key={c.name} onClick={()=>onSelect(c.name)}>{c.text}</li>
                    })}
                </ul>
            </div>
        </CategoriesBlock>
    )
}

export default Categories;