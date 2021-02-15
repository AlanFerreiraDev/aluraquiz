/* eslint-disable max-len */
/* eslint-disable react/prop-types */
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

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio de Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
}) {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        // src="https://placehold.it/400x400"
        src={question.image1}
        alt="Descrição"
        style={{
          width: '100%',
          heigth: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternativeId__${alternativeIndex}`;
            return (
              <label htmlFor={alternativeId}>
                {alternative}
                <input
                  id={alternativeId}
                  type="radio"
                />
              </label>
            );
          })}
          {/* Dica valiosa para debug do JS
          Se eu não souber os dados do meu JSON,
          o stringify transforma em texto e o 4
          é p aumentar o espaçcamento */}
          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
        />
        <LoadingWidget />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AlanFerreiraDev" />
    </QuizBackground>

  );
}
