import React from 'react';

import { Footer } from 'flowbite-react';

import './footer.css';

export default function App() {
    return(
        <footer className='footer'>
            <div className='innerFooter'>
                <div>
                    <p>Tel: (562) 695-8000</p>
                    <p>Email: info@planaexpo.com</p>
                    <p>Fax: (562)695-8004</p>
                </div>
                <div>
                    <p>14709 Spring Ave.,</p>
                    <p>Santa Fe Springs, CA, 90670</p>
                    <p>United States</p>
                </div>
            </div>
            <Footer Container className='copyright' >
                <Footer.Copyright by=" All Rights Reserved by Plan A Exposition Inc." year={2021} />
            </Footer>
        </footer>

    )
}