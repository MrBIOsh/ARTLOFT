// import './Header.scss'
// import logo from "../assets/logo.svg"
// import NavigationList from "./NavigationList"
import './Services.scss'
import accessories from "../assets/accessories.jpg"
import furniture from "../assets/furniture.jpg"
import welding from "../assets/welding.jpg"
import powderCoating from "../assets/powderCoating.jpg"
import { useState } from 'react';
import { useMatchMedia } from '../hooks/use-match-media';

const Services = () => {

    const items = [
        {
          url: powderCoating,
          title: 'Порошковая окраска',
          description: 'Экономичное, безопасное ударопрочное и антикоррозийное покрытие металла, гарантирующее долговечность изделий. Широкий спектр оттенков и фактур.'
        },
        {
          url: accessories,
          title: 'Изготовление крепежей и фурнитуры',
          description: 'Изготовим металлические неподвижные или подвижные элементы, необходимые как в быту, так и при проведении строительных работ.'
        },
        {
          url: welding,
          title: 'Сварочные работы',
          description: 'Сварка является одним из самых распространенных способов соединения  различных металлических деталей и конструкций, поскольку обеспечивает  очень высокую прочность готовых изделий'
        },
        {
          url: furniture,
          title: 'Ремонт мебели',
          description: 'Проводим необходимый комплекс работ, направленных на восстановление потерянных рабочих и внешних характеристик любого предмета мебели.'
        }
      ];

    const {isMobile, isTablet, isDesktop} = useMatchMedia();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const handleItemClick = (index) => {
        setSelectedIndex(index);
        setSelectedItem(items[index]);
    }

    return (
        <>
            <section className="services">
                <div className="services__header">
                    <h2 className="services__title title-3">услуги</h2>
                    <div className="services__box">
                    <p className="services__description description-m">Деятельность нашей компании заключается в производстве мебели в&nbsp;стиле loft и различных изделий из&nbsp;дерева, ЛДСП и металла. Однако наши специалисты всегда готовы оказать базовые услуги по обработке металла.</p>
                    </div>
                </div>
                <div className="services__grid">
                    {/* <div className="services__item services__main">
                        <img src="" alt="picture" />
                        <div className="services__text">
                            <span className="services__name"></span>
                            <p className="services__overview description-m"></p>
                        </div>
                    </div> */}
                    {/* style={{ marginTop: '20px', textAlign: 'center', border: '1px solid #ccc', padding: '20px', width: '80%' }} */}
                        {selectedItem ? (
                        <div className="services__item services__main"
                             key={selectedIndex}>
                            <img src={selectedItem.url} alt={selectedItem.title} style={{ width: '100%', height: '100%'}} />
                            <div className="services__text">
                                <span className="services__name">{selectedItem.title}</span>
                                <p className="services__overview description-m">{selectedItem.description}</p>
                            </div>
                        </div>
                        ) : (
                        <div className="services__item services__main">                            
                            <img src={items[0].url} alt={items[0].title} style={{ width: '100%', height: '100%' }} />                            
                            <div className="services__text">
                                <span className="services__name">{items[0].title}</span>
                                <p className="services__overview description-m">{items[0].description}</p>
                            </div>
                        </div>
                        )}
                    {items.map((item, index) => (
                        <div className="services__item" 
                            key={index} 
                            onClick={() => handleItemClick(index)} 
                            style={{ 
                                cursor: 'pointer', 
                                backgroundColor: selectedIndex === index ? '#1B1B1B' : 'transparent',
                                transition: '.2s',
                                padding: '55px 64px',
                                marginRight: index % 2 === 0 ? '.5rem' : '0',
                                marginLeft: index % 2 !== 0 ? '.5rem' : '0',
                                position: 'relative'
                                }}
                            >
                            <img src={item.url} alt={item.title} style={{ width: '100%', height: '100%' }} />
                            <div className="services__text" 
                                style={{ 
                                    position: 'absolute',
                                    top: '5px',
                                    left: '5px',
                                    bottom: 'unset'
                                }}
                            >
                                <span className="services__name" 
                                    style={{ 
                                        color: selectedIndex === index ? '#fff' : '#1B1B1B',                                        
                                        fontSize: '1.6rem',
                                        fontWeight: '500',
                                        textTransform: 'unset',
                                        backgroundColor: 'transparent',
                                        maxWidth: '40rem',
                                        padding: '0',
                                    }}
                                >{item.title}</span>
                            </div>
                        </div>
                    ))}
                    {/* <div className="services__item">
                        <img src="" alt="picture" />
                        <span className="services__name"></span>
                    </div>
                    <div className="services__item">
                        <img src="" alt="picture" />
                        <span className="services__name"></span>
                    </div>
                    <div className="services__item">
                        <img src="" alt="picture" />
                        <span className="services__name"></span>
                    </div>
                    <div className="services__item">
                        <img src="" alt="picture" />
                        <span className="services__name"></span>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Services;