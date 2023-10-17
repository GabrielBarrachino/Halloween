import calendar from '../../assets/calendar.svg';
import bgHome from '../../assets/bgHome.svg';
import { HomeContainer, ImgContainer, TextContainer } from './style';

export function Home(){
    return(
        <HomeContainer id='home'>
            <TextContainer>
                <h3>
                    <img src={calendar} alt="" />
                    <span>31 OCTOBR 2023</span>
                </h3>
                <h1>
                    It's Halloween Party O'Clock!
                </h1>
            </TextContainer>

            <ImgContainer>
                <img src={bgHome} alt="" />
            </ImgContainer>
        </HomeContainer>
    )
}