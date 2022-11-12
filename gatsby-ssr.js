import React from 'react';
import Layout from './src/components/layout';
import "@fontsource/roboto/700.css";
import "@fontsource/open-sans/400.css";

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}