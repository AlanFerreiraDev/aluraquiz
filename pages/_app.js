/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;
// Coloco o link aqui para abrir em todas as paginas que eu trabalhar
// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Quiz Curiosidades Séries e Filmes</title>
        <meta name="title" content="Quiz Curiosidades Séries e Filmes" />
        <meta name="description" content="" />
        <meta name="image" content="../_docs.quizPipoca.png" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz.alanferreiradev.vercel.app/" />
        <meta property="og:title" content="Quiz Curiosidades Séries e Filmes" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="../_docs.quizPipoca.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz.alanferreiradev.vercel.app/" />
        <meta property="twitter:title" content="Quiz Curiosidades Séries e Filmes" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="../_docs.quizPipoca.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
