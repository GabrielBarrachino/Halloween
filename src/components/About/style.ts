import styled from "styled-components";

export const AboutContainer = styled.section`
    width: 100%;
    max-width: 122.2rem;
    margin: 0 auto;
    padding: 4.5rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

export const TopTextContainer = styled.div`
    width: 100%;
    position: relative;
    .imgSpider{
        width: 100%;
        max-width: 6rem;
        height: 50rem;
        position: absolute;
        top: -15rem;
        left: -8rem;
        object-fit: cover;
    }
    div{
        h3{
            font-size: 5.8rem;
            color: ${props => props.theme['orangeColor']};
            text-transform: uppercase;
        }
        h2{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 4.8rem;
            gap: 1.6rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            img{
                max-width: 4.8rem;
                height: 4.8rem;
            }
            span{
                font-size: 5.8rem;
                color: ${props => props.theme['redColor']};
            }
        }
        p{
            font-size: 2.4rem;
            color: ${props => props.theme['white']};
            font-family: 'Rubik', sans-serif;
            text-transform: uppercase;
            line-height: 150%;
            max-width: 90rem;
            margin: 0 auto;
        }
    }
    .web{
        width: 100%;
        max-width: 75.9rem;
        height: 73.8rem;
        position: absolute;
        top: -18rem;
        right: -40rem;
        object-fit: cover;
        z-index: -5;
        opacity: .5;
    }

    @media (max-width: 1370px){
        .imgSpider{
            left: 0;
        }
    }
    @media (max-width: 1120px){
        .imgSpider{
            display: none;
        }
    }
    @media (max-width: 800px){
        div{
            h3{
                font-size: 5rem;
            }
            h2{
                margin-top: 1.5rem;
                gap: 1rem;
                img{
                    max-width: 4.2rem;
                    height: 4.2rem;
                }
                span{
                    font-size: 4.5rem;
                }
            }
            p{
                font-size: 2rem;
                max-width: 70rem;
            }
        }
    }
    @media (max-width: 620px){
        div{
            h3{
                font-size: 4rem;
            }
            h2{
                gap: 1rem;
                img{
                    max-width: 3rem;
                    height: 3rem;
                }
                span{
                    font-size: 3rem;
                }
            }
            p{
                font-size: 1.7rem;
            }
        }
        .web{
            max-width: 55.9rem;
            height: 50rem;
            right: -20rem;
        }
    }
    @media (max-width: 460px){
        div{
            h3{
                font-size: 3rem;
            }
            h2{
                gap: .5rem;
                img{
                    max-width: 2rem;
                    height: 2rem;
                }
                span{
                    font-size: 2.5rem;
                }
            }
            p{
                font-size: 1.4rem;
            }
        }
    }
    @media (max-width: 460px){
        div{
            h2{
                span{
                    font-size: 2rem;
                }
            }
        }
    }
`

export const TicketContainer = styled.div`
    margin-top: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    border: 2px solid #fff;
    border-radius: 16px;
    width: 100%;
    max-width: 46.2rem;
    padding: 1.8rem 2.4rem;
    img{
        width: 100%;
        max-width: 4.8rem;
        height: 100%;
        max-height: 4.8rem;
    }
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        p{
            font-size: 2rem;
            font-family: 'Rubik', sans-serif;
        }
        div{
            p{
                margin-top: .5rem;
                display: flex;
                align-items: center;
                gap: .7rem;
                img{
                    width: 100%;
                    max-width: 3.2rem;
                    height: 100%;
                    max-height: 3.2rem;
                }
            }
        }
    }
    @media (max-width: 800px){
        margin-top: 4.2rem;
        padding: 1.3rem 2rem;
        img{
            max-width: 4rem;
            max-height: 4rem;
        }
        div{
            p{
                font-size: 1.6rem;
            }
            div{
                p{
                    img{
                        max-width: 2rem;
                        max-height: 2rem;
                    }
                }
            }
        }
    }
    @media (max-width: 460px){
        margin-top: 4rem;
        padding: 1.3rem 1rem;
        img{
            display: none;
        }
        div{
            p{
                font-size: 1.6rem;
            }
        }
    }
`

export const BottomTextContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-content: center;
    gap: 2.3rem;
    margin-top: 5.8rem;
    position: relative;
    p{
        display: flex;
        align-items: center;
        gap: 1rem;
        span{
            font-size: 2.4rem;
            font-family: 'Rubik', sans-serif;
        }
        img{
            width: 100%;
            max-width: 3.2rem;
            height: 100%;
            max-height: 3.2rem;
        }
    }

    @media (max-width: 1120px){
        grid-template-columns: repeat(2, 1fr);
        gap: 2.3rem 5rem;
    }
    @media (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
        p{
            span{
                font-size: 2rem;
            }
            img{
                max-width: 3rem;
                max-height: 3rem;
            }
        }
    }
    @media (max-width: 460px){
        gap: 2.5rem;
        p{
            span{
                font-size: 1.6rem;
            }
            img{
                max-width: 2rem;
                max-height: 2rem;
            }
        }
    }
`