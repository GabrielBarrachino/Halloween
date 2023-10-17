import { HeaderContainer, NavContainer, LogoContainer, ButtonContainer } from './style'

export function Header(){
    return(
        <HeaderContainer>
            <LogoContainer>
                <h3>Party Time!</h3>
            </LogoContainer>

            <NavContainer>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#about">About Party</a>
                    </li>
                    <li>
                        <a href="#card">Reservation</a>
                    </li>
                    <li>
                        <a href="#footer">Contact</a>
                    </li>
                </ul>
            </NavContainer>

            <ButtonContainer>
                <button>Reservation</button>
            </ButtonContainer>
        </HeaderContainer>
    )
}