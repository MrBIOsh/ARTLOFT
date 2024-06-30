import './Header.scss'
import logo from "../assets/logo.svg"
import NavigationList from "./NavigationList"
import { useMatchMedia } from '../hooks/use-match-media';

export default function Header() {

    const {isMobile, isTablet, isDesktop} = useMatchMedia();

    return (
        <>
        <header className="header">
            <div className="container container-promo">
                <div className="header__box">
                    <img src={logo} alt={'logo'} className="header__logo"/> 
                    <div className="header__navigation">
                        {isDesktop ? (<NavigationList />) : (<button className='burgerMenu'></button>)}                        
                        <a href="tel:+79625873031" className="header__link header__link-phone">8 (962) 587-30-31</a>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}