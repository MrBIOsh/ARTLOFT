import './Header.scss'
import logo from "../assets/logo.svg"
import NavigationList from "./NavigationList"

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <img src={logo} alt={'logo'} className="header__logo"/> 
                    <div className="header__navigation">
                        <NavigationList />
                        <a href="tel:+79625873031" class="header__link header__link-phone">8 (962) 587-30-31</a>
                    </div>
                </div>
            </div>
        </header>
    )
}