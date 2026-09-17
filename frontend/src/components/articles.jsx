import { Link } from "react-router-dom";
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