import { useState } from 'react';
import { useMatchMedia } from './hooks/use-match-media';
import './App.scss';
import artloftsvg from './assets/promo_artloft.svg';
import curves from './assets/curves-src.svg';
import curvesTablet from './assets/curves-tablet.svg';
import promoImg from './assets/promo.png';
import lightImg from './assets/light.png';
import lightTopImg from './assets/lightTop.png';
import Header from './components/Header';

function App() {
    const {isMobile, isTablet, isDesktop} = useMatchMedia();

    const heights = [4, 3.23, 3.08, 2, 1.85, 1.38, 1.08, 0.46];

  return (
    <>
      <div>        
        <Header />
        <div className='promo'>
          <div className="container container-promo">
            <div className="promo__box-one">
              <div className="promo__left">
                <p className="promo__text">
                  компания,<br />
                  <span>которая реализует любые </span>
                  проекты из металла, лдсп и дерева,
                </p>
                <p className="promo__text asterisk">
                  создает уникальную<br /> мебель в стиле loft.
                </p>
              </div>
              <div className="promo__right">
                <p className="promo__text">Мы занимаемся изготовлением мебели разного уровня - от эконом до премиум класса</p>
              </div>
            </div>
            <div className="promo__box-two">
              <img className='curves' src={!isDesktop ? curvesTablet : curves} style={{width: '99.5%', zIndex: '-1'}} alt="curves" />
              <img src={artloftsvg} style={{width: '100%'}} alt="ARTLOFT-SVG" />
              <div>
                <img src={promoImg} style={{width: '100%'}} alt="promo" />
              </div>
            </div>
          </div>
        </div>          
        <div className="lines" style={{width: '100%', height: '100%'}}>
              {heights.map((height, index) => (
                  <div key={index} className='line' style={{height: `${(isDesktop ? height : (isTablet ? height *= 1.63 : (isMobile ? height /= 1.2 : height *= 1.6)))}px`, opacity: `calc(0.9 - 0.${index})`}}></div>
              ))}
        </div>
        <main>
          <div className="container">
              <section className="about">
                <div className="about__box">
                  <div className="about__brackets">
                    <svg className='bracketL' width="65" height="245" viewBox="0 0 65 245" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M62.9777 244.904L64.7777 243.404C35.0777 213.404 20.3777 169.304 20.3777 123.104C20.3777 76.9044 35.0777 30.7044 64.7777 1.90442L62.9777 0.404423C29.6777 28.0044 0.877753 71.8044 0.877753 121.604C0.877749 171.404 30.5777 215.804 62.9777 244.904Z" fill="#FE4229"/>
                    </svg>
                    <picture>
                      <img src={lightImg} alt="11" />
                    </picture>
                    <svg className='bracketR' width="65" height="245" viewBox="0 0 65 245" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M62.9777 244.904L64.7777 243.404C35.0777 213.404 20.3777 169.304 20.3777 123.104C20.3777 76.9044 35.0777 30.7044 64.7777 1.90442L62.9777 0.404423C29.6777 28.0044 0.877753 71.8044 0.877753 121.604C0.877749 171.404 30.5777 215.804 62.9777 244.904Z" fill="#FE4229"/>
                    </svg>
                  </div>
                  <div className="about__content">
                    <h2 className="about__title">                      
                      <span>Наличие&nbsp;собственной</span>производственной базы позволяет воплощать  самые разнообразные идеи и проекты.
                    </h2>
                    <div className="about__description">
                      <div className="about__text">                        
                        <p className="description-l about__description-l">Добро пожаловать в мир ArtLoft — компании, целью которой является создание уникальной мебели в  современном стиле loft.</p>                      
                        <p className="description-m about__description-m">ArtLoft не просто мебельный бренд, это история, вдохновлённая индустриальным и&nbsp;постиндустриальным наследием. Мы считаем, что каждая деталь имеет значение, и стремимся к&nbsp;тому, чтобы каждый наш клиент чувствовал особую атмосферу и&nbsp;удовольствие от использования нашей&nbsp;мебели.</p>
                      </div>
                      <img src={lightTopImg} alt="222" />
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </main> 
      </div>
    </>
  )
}

export default App
