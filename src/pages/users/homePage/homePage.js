import { memo } from "react"
import Carousel from "react-bootstrap/Carousel";
import "./homePage.scss"

const HomePage = () => {
    return (
        <div className="body-container">
            <div className="slide-container">
                <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="Slide-img"
                        src="https://itsmoreofacomment.com/wp-content/uploads/2021/09/Dune-Movie-Official-Poster-banner-feature.jpg?fbclid=IwAR3UVGajM7yOumlznITNUJ7r6V56Ipyg77cr_9BYxnUGEpkD2hBJK5JBZ9k_aem_ASuy2E2OA10rg97PmQr05stL0Ib1uJZAvlvXKa6aMRMHtZc7t4fNcbaUxBYKGV4D1y5OFiSolG8X2QABS6LdBxoA"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img 
                        className="Slide-img"
                        src="https://th.bing.com/th/id/OIP.dqV-B1H5NOdQUgK50a_kwgHaEK?rs=1&pid=ImgDetMain"/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="Slide-img"
                        src="https://th.bing.com/th/id/R.5509cfed23c75bea4d387725f72a8b7b?rik=9ALJ4cC%2f30dgqw&pid=ImgRaw&r=0"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="Slide-img"
                        src="https://media.comicbook.com/2016/05/dvd-deadpool-182215-1280x0.png"
                    />
                </Carousel.Item>
                </Carousel>
            </div>
            
        </div>
    )
}

export default memo(HomePage)