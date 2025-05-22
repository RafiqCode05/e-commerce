import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io"
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";



const Home = () => {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1>
                    Alış-verişə xoş gəlmisiniz!
                </h1>
                <p>
                    Ən yeni məhsullar,ən sərfəli qiymətlərlə!
                </p>
                <Link to="/products" className="home-btn">
                    Məhsullara bax
                </Link>
            </div>
            <div className="home-banner">
                <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" alt="Kampaniya" />
                <div className="banner-text">
                    <h2>
                        Yay endirimləri başladı!
                    </h2>
                    <p>
                        Bütün geyimlərə 30%-dək endirim!
                    </p>
                </div>
            </div>
            <section className="home-stats">
                <div>
                    <strong>
                        5000+
                    </strong>
                    <span>
                        Məhsul çeşidi
                    </span>
                </div>
                <div>
                    <strong>
                        24 saat
                    </strong>
                    <span>
                        Çatdırılma
                    </span>
                </div>
                <div>
                    <strong>
                        100%
                    </strong>
                    <span>
                        Müştəri məmnuniyyəti
                    </span>
                </div>
            </section>
            <section className="home-features">
                <div className="feature-block">
                    <h2>Kateqoriyalar</h2>
                    <ul>
                        <li>
                            <Link to="/products?cat=elektronika">Elektronika</Link>
                        </li>
                        <li>
                            <Link to="/products?cat=geyim">Geyim</Link>
                        </li>
                        <li>
                            <Link to="/products?cat=aksesuar">Aksesuar</Link>
                        </li>
                    </ul>
                </div>
                <div className="feature-block">
                    <h2>Ən çox satılan məhsullar</h2>
                    <ul>
                        <li>iPhone 15 Pro</li>
                        <li>Adidas idman ayaqqabısı</li>
                        <li>Xiaomi Mi Band 8</li>
                    </ul>
                    <p className="feature-note">Daha çox məhsul tezliklə!</p>
                </div>
            </section>

            <section className="home-reviews">
                <h2>
                    Müştəri rəyləri
                </h2>
                <div className="reviews-list">
                    <div className="review-card">
                        <p>
                            "Çox sürətli çatdırılma və keyfiyyətli məhsullar"
                        </p>
                        <span>
                            - Aysel M.
                        </span>
                    </div>
                    <div className="review-card">
                        <p>
                            "Səbət funksiyası və sayt dizaynı çox rahatdır"
                        </p>
                        <span>
                            - Elvin R.
                        </span>
                    </div>
                </div>
            </section>
            <section className="home-social">
                <h2>
                    Bizi izləyin
                </h2>
                <div className="social-links">
                    <a href="https://www.instagram.com/" target="_blank">
                        <IoLogoInstagram />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <FaFacebook />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <FaYoutube />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Home