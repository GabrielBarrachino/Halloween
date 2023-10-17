import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    max-width: 164rem;
    margin: 0 auto;
    padding: 15rem 0 10rem 0;
    text-align: center;
    display: none;
    h2{
        font-size: 5.8rem;
        font-weight: 400;
        text-transform: uppercase;
        color: ${props => props.theme['orangeColor']};
    }
    nav{
        margin-top: 1.5rem;
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.6rem;
            li{
                transition: all .3s;
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
    }
`