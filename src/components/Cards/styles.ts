import styled from "styled-components";

export const CardContainer = styled.section`
    width: 100%;
    max-width: 122.2rem;
    margin: 0 auto;
    padding: 5.5rem 1.5rem;
    .title{
        font-size: 5.8rem;
        color: ${props => props.theme['orangeColor']};
        text-align: center;
    }

    @media (max-width: 990px){
        padding: 5rem 1.5rem;
        .title{
            font-size: 5rem;
        }
    }
    @media (max-width: 600px){
        padding: 3rem 1.5rem;
        .title{
            font-size: 3rem;
        }
    }
`

export const CardsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 4.8rem;
    gap: 3rem;
    .card{
        background: ${props => props.theme['grayColor']};
        width: 100%;
        max-width: 34.3rem;
        height: 46.4rem;
        border-radius: 40px;
        padding: 2.6rem 4.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        &.cardOrange{
            background: ${props => props.theme['orangeColor']};
            color: ${props => props.theme['grayColor']};
            button{
                background: ${props => props.theme['grayColor']};
                color: ${props => props.theme['white']};
            &:hover{
                background: #4E4D4D;
            }
        }
        }
        .textsContainer{
            text-align: center;
            h5{
                 font-size: 3.6rem;
                 font-weight: 400;
                 letter-spacing: .5px;
                 margin-bottom: 1.6rem;
            }
            span{
                font-size: 3rem;
                font-family: 'Rubik', sans-serif;
                font-weight: 600;
            }
            .description{
                margin-top: 3.5rem;
                font-family: 'Rubik', sans-serif;
                font-size: 2.2rem;
                p{
                    &:not(:last-child){
                        margin-bottom: 3rem;
                    }
                }
            }
        }
        button{
            width: 100%;
            max-width: 23.7rem;
            height: 5.4rem;
            border-radius: 10px;
            margin-top: 3.6rem;
            background: ${props => props.theme['orangeColor']};
            color: ${props => props.theme['bgColor']}; 
            font-family: 'Rubik', sans-serif;
            font-size: 1.8rem;
            cursor: pointer;
            transition: all .3s;
            &:hover{
                background: #E96015;
            }
        }
    }

    @media (max-width: 600px){
        margin-top: 4rem;
        .card{
            max-width: 32em;
            height: 43rem;
            padding: 2rem 4rem;
            .textsContainer{
                h5{
                    font-size: 3rem;
                    margin-bottom: 1.3rem;
                }
                span{
                    font-size: 2.5rem;
                }
                .description{
                    margin-top: 3rem;
                    font-size: 2rem;
                    p{
                        &:not(:last-child){
                            margin-bottom: 2.6rem;
                        }
                    }
                }
            }
            button{
                font-size: 1.5rem;
            }
        }
    }
`