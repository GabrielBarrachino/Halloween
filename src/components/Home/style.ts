import styled from "styled-components";

export const HomeContainer = styled.section`
    width: 100%;
    max-width: 122.2rem;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5.4rem;
    
    @media (max-width: 700px){
        margin-top: 4rem;
    }
    @media (max-width: 540px){
        margin-top: 3rem;
    }
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 10;
    h3{
        display: flex;
        align-items: center;
        img{
            width: 100%;
            max-width: 2.6rem;
            height: 100%;
            max-height: 2.6rem;
            margin-right: 1.3rem;
        }
        span{
            font-family: 'Rubik', sans-serif;
            color: ${props => props.theme['white']};
            font-size: 2.4rem;
        }
    }
    h1{
        font-size: 6.8rem;
        font-weight: 400;
        margin-top: 1rem;
        color: ${props => props.theme['orangeColor']};
        letter-spacing: .8px;
    }

    @media (max-width: 700px){
        h3{
            span{
                font-size: 2rem;
            }
        }
        h1{
            font-size: 5.4rem;
        }
    }
    @media (max-width: 540px){
        h3{
            span{
                font-size: 1.7rem;
            }
        }
        h1{
            font-size: 4.5rem;
        }
    }
    @media (max-width: 400px){
        h3{
            img{
                max-width: 2rem;
                max-height: 2rem;
                margin-right: 1rem;
            }
            span{
                font-size: 1.5rem;
            }
        }
        h1{
            font-size: 3.5rem;
        }
    }
`

export const ImgContainer = styled.div`
    img{
        width: 100%;
        max-width: 144rem;
        object-fit: cover;
        height: 84.3rem;
        margin-top: -10rem;
    }
    @media (max-width: 700px){
        img{
            max-width: 130rem;
        }
    }
    @media (max-width: 540px){
        img{
            height: 75rem;
        }
    }
    @media (max-width: 540px){
        img{
            height: 65rem;
        }
    }
`