import * as React from 'react';

export default function Footer() {

    function Copyright() {
        const copyrightYear = new Date().getFullYear();

        return (
            <span>&copy; {copyrightYear}</span>
        )
    }

    return (
        <>
            <footer>
                <p>{`Copyright Aaron Endsley`} <Copyright /></p>
            </footer>
        </>
    )
}