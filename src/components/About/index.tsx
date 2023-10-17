import { AboutContainer, TicketContainer, TopTextContainer, BottomTextContainer } from "./style";
import arrowRight from '../../assets/arrow-right.png';
import arrowLeft from '../../assets/arrow-left.png';
import ticket from '../../assets/ticket.png';
import local from '../../assets/location.png';
import tkSquare from '../../assets/tick-square.png';
import spider from '../../assets/spider.svg';
import web from '../../assets/web.svg';

export function About(){
    return (
        <AboutContainer id='about'>
            <TopTextContainer>
                <img src={spider} alt="" className="imgSpider"/>
                <div>
                    <h3>Join Us</h3>
                    <h2>
                        <img src={arrowRight} alt="" />
                        <span>This year's Halloween Party!</span>
                        <img src={arrowLeft} alt="" />
                    </h2>
                    <p>Our Halloween party this year will be an unforgettable experience, filled with spooky decorations, eerie music, thrilling games, and costume contests. Join us for a night of magic and fright!</p>
                </div>
                <img src={web} alt="" className="web"/>
            </TopTextContainer>

            <TicketContainer>
                <img src={ticket} alt="" />
                <div>
                    <p>Tue, 31 Octobr 2023, 19:00</p>
                    <div>
                        <p>
                            <img src={local} alt="" />
                            <span>The Menza Club, Istanbul city</span>
                        </p>
                    </div>
                </div>
            </TicketContainer>

            <BottomTextContainer>
                <p>
                    <img src={tkSquare} alt="" />
                    <span>NightWitch hunt</span>
                </p>
                <p>
                    <img src={tkSquare} alt="" />
                    <span>Bestcostume contest</span>
                </p>
                <p>
                    <img src={tkSquare} alt="" />
                    <span>DeliciousCakes and sweets</span>
                </p>
                <p>
                    <img src={tkSquare} alt="" />
                    <span>Everybody get tipsy</span>
                </p>
                <p>
                    <img src={tkSquare} alt="" />
                    <span>Dance-off with a star guest</span>
                </p>
            </BottomTextContainer>
        </AboutContainer>
    )
}