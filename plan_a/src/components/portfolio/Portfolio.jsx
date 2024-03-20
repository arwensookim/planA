import React from 'react';

import Footer from '../footer/App';
import './portfolio.css'


export default function Portfolio() {
    return (
        <div >
            <div className='portfolioSection'>
                <div className='port'>
                    <button className='portBtn'>portfolio</button>
                </div>
                <div className='magic'>
                    <button className='magicBtn'>wwcmagic portfolio</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}