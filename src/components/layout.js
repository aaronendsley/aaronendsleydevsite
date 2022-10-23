import * as React from 'react';
import HeaderNavigation from './HeaderNav';
import Footer from './footer';


export default function Layout({ children }) {

    return (
        <>
            <HeaderNavigation />
            <main>{children}</main>
            <Footer />
        </>
    )
}