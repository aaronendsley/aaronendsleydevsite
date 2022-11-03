import * as React from 'react';
import HeaderNavigation from './HeaderNav';
import Footer from './footer';
import '../styles/global.css';


export default function Layout({ children }) {

    return (
        <div className='layout'>
            <div className='content-wrap'>
                <HeaderNavigation />
                <main>{children}</main>
            </div>
            <Footer />

        </div>
    )
}