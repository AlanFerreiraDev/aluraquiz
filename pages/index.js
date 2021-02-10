/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
import React from 'react';
import Head from 'next/head';// Esse import é direto do node_modules, não criamos nenhum cmponent para isso
import { useRouter } from 'next/router'; // Esse router é o next, em projetos next quem  cuida das rotas é o próprio next

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Lottie from 'react-lottie';
import animationData from '../src/animaton.json';

// <link rel="preconnect" href="https://fonts.gstatic.com">

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

// export const QuizContainer = styled.div`
//   width: 100%;
//   max-width: 350px;
//   padding-top: 45px;
//   margin: auto 10%;
//   @media screen and (max-width: 500px) {
//     margin: auto;
//     padding: 15px;
//   }
// `;

export default function Home() {
  // Preciso antes iniciar esse hook para usá-lo na função abaixo
  const router = useRouter();
  // Aqui usamos um hook do React, onde passamos o estado inicial do nosso state
  // Sempre variavel,função
  const [name, setName] = React.useState('');
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <QuizBackground backgroundImage={db.bg}>
      <Head />
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
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => {
                  // A função infosDoEvento carrega as informações do input
                  // Passo para dentro da minha função o valor q quero mudar sempre
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz aí seu nome ;)"
                value={name}
              />
              {/* Condição direta no disabled */}
              <Button type="submit" disabled={name.length === 0}>
                { `${name} Jogar ` }
              </Button>
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
