import { useState } from 'react';
import './App.scss';
import artloftsvg from './assets/promo_artloft.svg';
import curves from './assets/test.svg';
import promoImg from './assets/promo.png'
import Header from './components/Header';

function App() {
    const heights = [4, 3.23, 3.08, 2, 1.85, 1.38, 1.08, 0.46];

  return (
    <>
      <div>
        <div className='promo'>
          <div className="container">
            <Header />
            <div className="promo__box-one">
              <div className="promo__left">
                <p className="promo__text">
                  компания,<br />
                  <span>которая реализует любые </span>
                  проекты из металла лдсп и дерева,
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
              <img className='curves' src={curves} style={{width: '99.5%', zIndex: '-1'}} alt="curves" />
              <img src={artloftsvg} style={{width: '100%'}} alt="ARTLOFT-SVG" />
              <div>
                <img src={promoImg} style={{width: '100%'}} alt="promo" />
              </div>
            </div>
          </div>
        </div>          
        <div style={{height: `2px`, backgroundColor: '#fff'}}></div>           
        <div className="lines" style={{width: '100%', height: '100%'}}>
              {heights.map((height, index) => (
                <div key={10+index} className='linewrap' style={{height: '4px', position: 'relative'}}>
                  <div key={index} className='line' style={{height: `${height}px`, opacity: `calc(0.9 - 0.${index})`}}></div>
                </div>
              ))}
        </div>
        <main>

        </main> 
      </div>
    </>
  )
}

export default App
