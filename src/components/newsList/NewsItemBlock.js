import styled from 'styled-components';
const NewsItemBlock = styled.div`
    display : flex;

    .thumbnail{
        margin-right: 1rem;
        
        .thumbnail__img {
            display:block;
            width: 160px;
            height : 100px;
            
        }

    }
    .contents{
        .contents__title{
            margin:0;
            a{
                text-decoration : none;
                color:black;
            }
        }

        p{
            margin:0;
            line-height:1.5;
            margin-top:0.5rem;
            white-space:normal;
        }
    }
    & + &{
        margin-top: 3rem;
    }
`;

export default NewsItemBlock;