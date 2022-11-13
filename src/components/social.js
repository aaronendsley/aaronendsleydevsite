import * as React from 'react';
import { MdEmail } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Social, socialItem } from '../styles/socialbar.module.css';

export default function SocialBar() {
    return (
        <>
            <div className={Social}>
                <a href="https://twitter.com/aaronendsleydev" target="_blank" rel="noreferrer">
                    <AiFillTwitterCircle className={socialItem} size={42} />
                </a>
                <a href="https://github.com/aaronendsley" target="_blank" rel="noreferrer">
                    <AiFillGithub className={socialItem} size={42} /></a>
                <a href="https://www.linkedin.com/in/aaron-endsley-6786aa8a/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin className={socialItem} size={42} />
                </a>
                <a href="mailto:aaronendsley@gmail.com" target="_blank" rel="noreferrer">
                    <MdEmail className={socialItem} size={42} />
                </a>
            </div>
        </>
    )
} 