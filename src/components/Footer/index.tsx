import { FooterContainer } from './style';
import behance from '../../assets/behance.svg';
import figma from '../../assets/Figma.svg';
import linkedin from '../../assets/LinkedIn.svg';
import insta from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';

export function Footer(){
    return (
        <FooterContainer id='footer'>
            <h2>phone reservation? (+1) 987 46 52 </h2>
            <nav>
                <ul>
                    <li>
                        <a href="#"><img src={behance} alt="" /></a>
                    </li>
                    <li>
                        <a href="#"><img src={figma} alt="" /></a>
                    </li>
                    <li>
                        <a href="#"><img src={linkedin} alt="" /></a>
                    </li>
                    <li>
                        <a href="#"><img src={insta} alt="" /></a>
                    </li>
                    <li>
                        <a href="#"><img src={youtube} alt="" /></a>
                    </li>
                </ul>
            </nav>
        </FooterContainer>
    )
}