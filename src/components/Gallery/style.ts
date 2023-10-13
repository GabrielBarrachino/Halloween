import styled from "styled-components";

export const Bats = styled.div`
    div{
        z-index: 1;
        img{
            max-width: 62.5rem;
            height: 100%;
            max-height: 59.4rem;
            margin: -30rem 0 -30rem 0;
        }
    }

    @media (max-width: 900px){
        div{
            img{
                max-width: 40rem;
                max-height: 44rem;
                margin: -18rem 0 -20rem 0;
            }
        }
    }

    @media (max-width: 640px){
        div{
            img{
                max-width: 30rem;
                max-height: 40rem;
                margin: -15rem 0 -16rem 0;
            }
        }
    }

    @media (max-width: 480px){
        div{
            img{
                max-width: 26rem;
                max-height: 20rem;
                margin: -10rem 0 -12rem 0;
            }
        }
    }
`

export const GalleryContainer = styled.section`
    width: 100%;
    max-width: 164rem;
    margin: 10rem auto;
    padding: 0 1.5rem;

    @media (max-width: 480px){
        margin-bottom: 3rem;
    }
`

export const TopContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
    h2{
        font-size: 6.8rem;
        font-weight: 400;
        color: ${props => props.theme['orangeColor']};
    }

    @media (max-width: 900px){
        h2{
            font-size: 5rem;
        }
    }

    @media (max-width: 640px){
        h2{
            font-size: 4rem;
        }
    }

    @media (max-width: 480px){
        h2{
            font-size: 3.4rem;
        }
    }
`

export const ImgContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4rem;
    img{
        border-radius: 15px;
        cursor: pointer;
        transition: all .3s;
        &:hover{
            transform: scale(1.06);
        }
    }

    @media (max-width: 1300px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
    }

    @media (max-width: 640px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px){
        grid-template-columns: repeat(1, 1fr);
        img{
            height: 100%;
            max-height: 30rem;
            max-width: 30rem;
            margin: 0 auto;
        }
    }
`