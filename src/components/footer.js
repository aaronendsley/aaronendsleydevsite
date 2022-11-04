import * as React from 'react';
import { footerContainer } from '../styles/footer.module.css';

export default function Footer() {

    function Copyright() {
        const copyrightYear = new Date().getFullYear();

        return (
            <span>&copy; {copyrightYear}</span>
        )
    }

    return (
        <>
            <footer className={footerContainer}>
                <p>{`Copyright Aaron Endsley`.toUpperCase()} <Copyright /></p>
            </footer>
        </>
    )
}