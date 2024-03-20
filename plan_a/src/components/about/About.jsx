import React from 'react';

import Footer from '../footer/App'
import './about.css';

export default function About() {
    return(
        <div className='about'>
            <div className='headerPic'></div>
            <div className='greetings'>
                <h3 style={{color: "green"}}>greetings!</h3>
                <p style={{fontWeight: "bold", fontSize: "20px"}}>We are Plan A Exposition Inc.</p>
                <span></span>
                <ul>
                    <li>Plan A Exposition Inc. is a professional exhibition company with active communications in all areas, which works on your behalf.</li>
                    <li>Plan A Exposition Inc. employs a professional staff that possesses a clear strategy to develop creative and innovative designs for your prospective project.</li>
                    <li>Plan A Exposition Inc. offers a systematic service process through our experienced staff that always operates through the perspective of the client.</li>
                    <li>Plan A Exposition Inc. establishes overseas networks all across North America, South America, and Canada when dealing with international businesses.</li>
                </ul>
                <p>Plan A Exposition Inc. will promise you integrity and attentiveness for your trade show needs.</p>
                <span></span>
                <p>Thank you,</p>
                <p>Plan A Exposition Inc.
                    <br />
                    DBA: MAtch Frame
                </p>
            </div>
            <div className='service'>
                <div className='ourService'>
                    <h3 style={{fontSize:"30px", textTransform:"uppercase"}}>Our Service</h3>
                    <img className='circulationImg' src="https://static.wixstatic.com/media/eeb834_9efe9c7796404022a7d9e1dcddb019dc~mv2.png/v1/fill/w_1076,h_1076,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/arrow.png" alt="" />
                    <div className='innerTxt' style={{bottom: "-75%", left: "29%"}}><span className='first' ><h4>Trade Consultation</h4></span></div>
                    <div className='innerTxt' style={{bottom: "-83%", left: "40%"}}><span className='second'><h4>Graphic</h4></span></div>
                    <div className='innerTxt' style={{bottom:"-95%", left: "39%"}}><span className='third'><h4>Booth Production</h4></span></div>
                    <div className='innerTxt'style={{bottom:"-108%", left: "30%"}}><span className='fourth'><h4>Delivery Service</h4></span></div>
                    <div className='innerTxt'style={{bottom:"-97%", left: "21%"}}><span className='fifth'><h4>Booth Installation</h4></span></div>
                    <div className='innerTxt' style={{bottom:"-84%", left: "20%"}}><span className='sixth'><h4>Booth Dismantle</h4></span></div>
                    <div className='innerCircle'></div>
                </div>
                <div className='innerService'>
                    <p>We provide a one-step service</p>
                    <ul className='service_list'>
                        <li>Trade Consultation</li>
                        <li>Wooden Structures</li>
                        <li>Display System</li>
                        <li>Exhibit Design</li>
                        <li>2D, 3D Graphic Service</li>
                        <li>Event & Promotions</li>
                        <li>Interio Architecture</li>
                    </ul>
                </div>
            </div>
            <div className='client'>
                <div className='heading'><h3 style={{fontSize:"30px", textTransform:"uppercase"}} >Our Clients</h3></div>
                <div className='clientList'>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <br />
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <br />
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <br />
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                        <img src="https://static.wixstatic.com/media/eeb834_5ccc0852312c4bdcb01d41e12c99c485~mv2.jpg/v1/fill/w_252,h_189,al_c,lg_1,q_80,enc_auto/lg_display.jpg" width='180px' height='135px'/>
                </div>
            </div>
            <Footer />
        </div>
    )
}