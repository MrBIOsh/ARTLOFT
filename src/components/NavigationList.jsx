import './NavigationList.scss'

export default function NavigationList() {
    return (
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item"><a href="#" className="header__link">О компании</a></li>
                <li className="header__item"><a href="#" className="header__link">Преимущества</a></li>
                <li className="header__item"><a href="#" className="header__link">Услуги</a></li>
                <li className="header__item"><a href="#" className="header__link">Этапы работы</a></li>
                <li className="header__item"><a href="#" className="header__link">FAQ</a></li>
                <li className="header__item"><a href="#" className="header__link">Каталог</a></li>
                <li className="header__item"><a href="#" className="header__link">Контакты</a></li>
            </ul>
        </nav>
    )
}