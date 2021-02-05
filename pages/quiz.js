/* eslint-disable react/style-prop-object */
import React from 'react';
import Head from 'next/head';// Esse import é direto do node_modules, não criamos nenhum cmponent para isso

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h3>
              Pergunta 1 de
              {' '}
              {`${db.questions.length}`}
            </h3>
          </Widget.Header>
          <img
            src="https://placehold.it/400x400"
            alt="Descrição"
            style={{
              width: '100%',
              heigth: '150px',
              objectFit: 'cover',
            }}
          />
          <Widget.Content>
            <Button>
              Confirmar
            </Button>
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
