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
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">About Party</a>
                    </li>
                    <li>
                        <a href="#">Reservation</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </NavContainer>

            <ButtonContainer>
                <button>Reservation</button>
            </ButtonContainer>
        </HeaderContainer>
    )
}