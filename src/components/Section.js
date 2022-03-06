import React from 'react'
import Header from './Header'
import card from './assets/card4.png'
import './styles/Section.css'

const Section = () => {
    return (
        <section className='section'>
            <Header/>

            <div className="section__box">
                <div className="section__content">
                    <h1 className='content__header'>M-ALEX</h1>
                    <p className='small__p'>For your better business</p>
                    <button>Get</button>
                    <button>Discover</button>
                </div>

                <div className="section__img">
                    <img src={card} alt="" />
                </div>


            </div>

        </section>
    )
}

export default Section
