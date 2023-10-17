import img1 from '../../assets/foto1.png';
import img2 from '../../assets/foto2.png';
import img3 from '../../assets/foto3.png';
import img4 from '../../assets/foto4.png';
import img5 from '../../assets/foto5.png';
import img6 from '../../assets/foto6.png';
import img7 from '../../assets/foto7.png';
import img8 from '../../assets/foto8.png';
import img9 from '../../assets/foto9.png';
import img10 from '../../assets/foto10.png';
import { Bats, GalleryContainer, ImgContainer, TopContainer } from './style';
import bats from '../../assets/bats.svg'

export function Gallery(){
    return(
        <Bats>
            <div>
                <img src={bats} alt="" />
            </div>
            <GalleryContainer id='gallery'>
                <TopContainer>
                    <h2>Halloween Memories</h2>
                </TopContainer>
                <ImgContainer>
                    <img src={img1} alt="" />
                    <img src={img3} alt="" />
                    <img src={img6} alt="" />
                    <img src={img5} alt="" />
                    <img src={img8} alt="" />
                    <img src={img4} alt="" />
                    <img src={img7} alt="" />
                    <img src={img2} alt="" />
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                </ImgContainer>
            </GalleryContainer>
        </Bats>
    )
}