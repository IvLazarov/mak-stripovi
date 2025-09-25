import { Link } from "react-router";
import './Home.css';

const Home = () => {
    return <div className="home-container">
        <div className="title-container">
        <h1>Добредојдовте на сајтот на Мак Стрипови!</h1>
        </div>
        <div className="link-container">
        <div className="links">
        <Link className="hover-underline" to={'/нашата-приказна'} >Никулец</Link>
        <Link className="hover-underline" to={'/членови'} >Членови</Link>
        <Link className="hover-underline" to={'/СтрипТрип'} >СтрипТрип</Link>
        <Link className="hover-underline" to={'/стрип-школа'} >Стрип Школа</Link>
        </div>
        
        <div className="logo-container">
            <img src="./images/mak-stripovi-logo.jpg" alt="logo" />
        </div>
        </div>
    </div>
}

export default Home;