import styled from 'styled-components';

const NewsListBlock = styled.section`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    
    @media screen and (max-width: 768){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    }
`;

export default NewsListBlock;