import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import swiper1 from "../assets/services/swiper1.jpg";
import swiper2 from "../assets/services/swiper2.jpg";
import swiper3 from "../assets/services/swiper3.jpg";
import '../styles/components.css'
import "swiper/css";
export const ArticleHome = ({title,desc1,desc2,img1,img2,img3,btnText,link}) => {
    return (
        <article className="article-home">
            <div className="article-home-text">
                <h2 className="article-home-title">{title}</h2>
                <p className="article-home-desc">{desc1}</p>
                <p className="article-home-desc">{desc2}</p>
                <Link to={link}>
                    <button className="article-home-btn">
                        {btnText}
                    </button>
                </Link>
            </div>
            <div className="article-home-images">
                <img src={img1} alt={title} />
                <img src={img2} alt={title} />
                <img src={img3} alt={title} />
            </div>
        </article>
    )
}
export const Card1 = ({title,img,desc,btnText,just}) => {
    return (
        <article className={`card1 ${just === 'left' ? 'card1-left' : 'card1-right'} ${img}`}>
            <div className="card1-content">
                <h3 className="card1-title">{title}</h3>
                <p className="card1-desc">{desc}</p>
                <button className="btn btn-blue btn-animated btn-card1">
                    <span className="btn-text">{btnText}</span>
                </button>
            </div>
        </article>
    )
}
export const Card2 = ({title,img,desc,btnText,just,style2}) => {
    return (
        <article className={`card2 ${just === 'left' ? 'card2-left':'card2-right'} ${style2 === 'olive' ? 'card2-olive':'card2-blue'}`}>
            <img src={img} alt={title} className="card2-img"/>
            <div className="card2-content">
                <h3 className="card2-title">{title}</h3>
                <p className="card2-desc">{desc}</p>
                <button className={`btn btn-animated btn-card2 ${style2 === 'olive' ? 'btn-olive':'btn-white'}`}>
                    <span className="btn-text">{btnText}</span>
                </button>
            </div>
        </article>
    )
}

export const Card3 = ({title,img}) => {
    return (
        <article className="card3">
            <img src={img} alt={title} className="card3-img"/>
            <h4 className="card3-title">{title}</h4>
        </article>
    )
}

export const Card4 = ({title, img, tags = [], label,}) => {
    return (
        <article className="card4">
            <header className="header-card4">
                <h3>{title}</h3>
            </header>
            <div className="content-card4">
                <img src={img} alt={title} className="img-card4" loading="lazy" />
                <ul className="ul-tags-card4">
                    {tags.map((tag) => (
                        <li key={tag} className="li-tags-card4">{tag}</li>
                    ))}
                </ul>
            </div>
            <button type="button" className="button-card4">{label}</button>
        </article>
    )
}
export const Carousel = () => {
    const imagenesSwiper = [
        { src: swiper1, alt: "Playa soleada" },
        { src: swiper2, alt: "Atardecer frente al mar" },
        { src: swiper3, alt: "Bar" },
    ];
    const slides = [...imagenesSwiper, ...imagenesSwiper];
    return (
        <Swiper
            className="galeria__swiper"
            modules={[Autoplay, Keyboard]}
            loop={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={32}
            speed={1000}
            grabCursor={true}
            keyboard={{ enabled: true }}
            autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            }}
        >
        {slides.map((img, i) => (
          <SwiperSlide key={i} className="galeria__slide">
            <img src={img.src} alt={img.alt} draggable={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
}