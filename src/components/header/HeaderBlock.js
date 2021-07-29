import styled from 'styled-components';

const HeaderBlock = styled.header`

    padding: 0.6rem 1em;
    background : #3f63bf;
    height : 4rem;
    
    header{
        
        display:flex;
        width : 1080px;
        margin: 0 auto;
        justify-content: space-between;
        .header__news{
            color : #fff;
            
            text-decoration : none;
        }

        .header__search{
            display:flex;
            height : 43px;
            margin-left: 4rem;
            flex-basis: 50%;

            .searchInput{
                width:100%;
                outline : 0;
            }
    
    
            .searchImg{
                height: 100%;
                padding: 0.5rem 0.2rem;
                cursor:pointer;
                outline: 0;
            }
        }
        

    }
    
`

export default HeaderBlock;