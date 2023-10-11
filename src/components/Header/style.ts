import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 122.2rem;
    margin: 0 auto;
    padding: 4.5rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 540px){
        padding: 2.5rem 1.5rem;
    }
`

export const NavContainer = styled.nav`
    ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2.4rem;
        li{
            a{
                color: ${props => props.theme['whiteColorDois']};
                font-size: 1.6rem;
                font-family: 'Robik', sans-serif;
                letter-spacing: .7px;
                padding: .8rem;
                transition: all .3s;
                &:hover{
                    color: ${props => props.theme['orangeColor']};
                }
            }
        }
    }

    @media (max-width: 900px){
        display: none;
    }
`

export const LogoContainer = styled.div`
    h3{
        font-size: 4.8rem;
        letter-spacing: .7px;
        cursor: pointer;
    }
    @media (max-width: 540px){
        h3{
            font-size: 3.5rem;
        }
    }
    @media (max-width: 400px){
        h3{
            font-size: 3rem;
        }
    }
`

export const ButtonContainer = styled.div`
    button{
        color: #292D32;
        padding: 1.6rem 2.4rem;
        font-size: 1.6rem;
        font-family: 'Robik', sans-serif;
        font-weight: 600;
        border-radius: 10px;
        background: ${props => props.theme['orangeColor']};
        cursor: pointer;
        transition: all .3s;
        &:hover{
            transform: scale(1.06);
        }
    }
    @media (max-width: 540px){
        button{
            font-size: 1.5rem;
            padding: 1.6rem 2rem;
        }
    }
    @media (max-width: 400px){
        button{
            font-size: 1.3rem;
            padding: 1.4rem 2rem;
        }
    }
`