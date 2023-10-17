import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    max-width: 122.2rem;
    margin: 0 auto;
    padding: 15rem 0 10rem 0;
    text-align: center;
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

    @media (max-width: 730px){
        padding: 8rem 1.5rem;
        h2{
            font-size: 4.5rem;
        }
        nav{
            ul{
                gap: 1rem;
            }
        }
    }
    @media (max-width: 540px){
        padding: 5rem 1.5rem;
        h2{
            font-size: 3rem;
        }
        nav{
            ul{
                flex-wrap: wrap;
            }
        }
    }
    @media (max-width: 400px){
        h2{
            font-size: 2.5rem;
        }
    }
`