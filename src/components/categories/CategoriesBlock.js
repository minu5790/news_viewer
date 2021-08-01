import styled from "styled-components";

const CategoriesBlock = styled.div`
    
    border-bottom : 1px #e5e5e5 solid;

    .category{
        width:1080px;
        margin: 0 auto;
        line-height : 45px;
        
        ul{
            display: flex;
            padding : 0;
            li{
                margin : 3px 10px;
                list-style:none;
                font-weight : bold;
                font-size: 14px;
            }
            li:first-child{
                margin : 3px 0px;
            }
            li:hover{
                cursor:pointer;
            }
            .active{
                color:blue;
            }
        }

    }
`

export default CategoriesBlock;