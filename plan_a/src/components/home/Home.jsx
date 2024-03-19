import React from 'react';

import Footer from "../footer/App"
import './home.css';


export default function Home() {
    return(
        <div>
            <div className='home' >
                <div className='heading'>
                    <h3 className='header'>Welcome to Plan A Expo</h3>
                </div>
                <div className='context'>
                    <p className='text'>PLAN A Exposition Inc. is your choice for custom trade show booths.</p>
                    <span class="spcae">​</span>
                    <p className='text'>We provide excellent customer service for any client needing trade show displays or trade show booth designs.</p>
                    <span class="spcae">​</span>
                    <p className='text'>We offer a full turnkey service for various trade shows nationwide.</p>
                </div>
                <button className='portfolioBtn'>Check Portfolio</button>
            </div>
            <Footer />
        </div>
    )
}