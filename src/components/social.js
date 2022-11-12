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
                <AiFillTwitterCircle className={socialItem} size={42} />
                <AiFillGithub className={socialItem} size={42} />
                <AiFillLinkedin className={socialItem} size={42} />
                <MdEmail className={socialItem} size={42} />
            </div>
        </>
    )
} 