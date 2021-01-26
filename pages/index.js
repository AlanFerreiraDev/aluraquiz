/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';// Esse import é direto do node_modules, não criamos nenhum cmponent para isso
import { useRouter } from 'next/router'; // Esse router é o next, em projetos next quem  cuida das rotas é o próprio next

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// <link rel="preconnect" href="https://fonts.gstatic.com">

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  // Preciso antes iniciar esse hook para usá-lo na função abaixo
  const router = useRouter();
  const name = 'Alan';
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        {/* <!-- Primary Meta Tags -->
        <title>Quiz Curiosidades Séries e Filmes</title>
        <meta name="title" content="Quiz Curiosidades Séries e Filmes" />
        <meta name="description" content="Uma Divertida Competição para Rankear quem sabe mais sobre Filmes e Séries !!!" />
        <meta name="image" content="https://images6.alphacoders.com/692/692805.jpg" /> */}

        {/* <!-- Open Graph / Facebook --> */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz.alanferreiradev.vercel.app/" />
        <meta property="og:title" content="Quiz Curiosidades Séries e Filmes" />
        <meta property="og:description" content="Uma Divertida Competição para Rankear quem sabe mais sobre Filmes e Séries !!!" />
        <meta property="og:image" content="https://images6.alphacoders.com/692/692805.jpg" /> */}

        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz.alanferreiradev.vercel.app/" />
        <meta property="twitter:title" content="Quiz Curiosidades Séries e Filmes" />
        <meta property="twitter:description" content="Uma Divertida Competição para Rankear quem sabe mais sobre Filmes e Séries !!!" />
        <meta property="twitter:image" content="https://images6.alphacoders.com/692/692805.jpg" /> */}

      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            {/* onSubmit é do React */}
            {/* Como estamos fazenod uma página rápida, renderizada no server
            Ela não pode ficar recarregando, e para isso foi usado o evento infosDoEvento
            abaixo dentro da função com uma função para prevenir esse comportamento padrão
            o .preventDefault() */}
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              // Push com as queries params depois do ?
              router.push(`/quiz?name=${name}`);
              // router manda para próxima página
            }}
            >
              <p>{db.description}</p>
              <input placeholder="Diz aí seu nome:" />
              {/* Condição direta no diabled */}
              <button type="submit" disabled={name.length === 0}>
                Jogar!
                { `  ${name}` }
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p />
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AlanFerreiraDev" />
    </QuizBackground>
  );
}
