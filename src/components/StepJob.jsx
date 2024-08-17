import './StepJob.scss'
import TimeLine from './TimeLine'
import { useState } from 'react';
import { useMatchMedia } from '../hooks/use-match-media';

const StepJob = () => {

    return (
        <>
            <section className='stepjob'>
                <div className="stepjob__header">
                    <h2 className="stepjob__title title-3">мы готовы сотрудничать</h2>
                    <picture>
                        <svg width="181" height="194" viewBox="0 0 181 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M77.9822 193.254L79.8182 115.31L13.2237 156.035L0.872864 134.337L69.6371 97.1178L0.872864 59.8984L13.2237 38.2009L79.8182 78.9253L77.9822 0.981453H103.018L101.182 78.9253L167.776 38.2009L180.127 59.8984L111.363 97.1178L180.127 134.337L167.776 156.035L101.182 115.31L103.018 193.254H77.9822Z" fill="#FE4229"/>
                        </svg>
                    </picture>
                    <div className="stepjob__brackets">
                        <svg className='bracketL' width="285" height="236" viewBox="0 0 65 245" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M62.9777 244.904L64.7777 243.404C35.0777 213.404 20.3777 169.304 20.3777 123.104C20.3777 76.9044 35.0777 30.7044 64.7777 1.90442L62.9777 0.404423C29.6777 28.0044 0.877753 71.8044 0.877753 121.604C0.877749 171.404 30.5777 215.804 62.9777 244.904Z" fill="#FE4229"/>
                        </svg>
                        <p className="description-m stepjob__description">С физическими и юридическими лицами, государственными учреждениями, строительными компаниями и дизайнерскими агентствами.</p>
                        <svg className='bracketR' width="285" height="236" viewBox="0 0 65 245" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M62.9777 244.904L64.7777 243.404C35.0777 213.404 20.3777 169.304 20.3777 123.104C20.3777 76.9044 35.0777 30.7044 64.7777 1.90442L62.9777 0.404423C29.6777 28.0044 0.877753 71.8044 0.877753 121.604C0.877749 171.404 30.5777 215.804 62.9777 244.904Z" fill="#FE4229"/>
                        </svg>
                    </div>
                </div>
                <TimeLine />
            </section>
        </>
    )
}

export default StepJob;