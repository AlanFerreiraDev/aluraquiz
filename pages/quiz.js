/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
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
  onSubmit,
}) {
  // Primeiro estado em undefined, quando nenhum radio for selecionado
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  // State para saber se o form foi Submitado (clique no botão de radio)
  const [isQuestionSubmited, setisQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  // isCorrect = State === Validação de dado do db.json
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
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

        <form onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          setisQuestionSubmited(true);
          setTimeout(() => {
            onSubmit();
            setisQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 3 * 1000);
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  // O alternativeIndex é o valor da resposta no db.json ...
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          {/* Dica valiosa para debug do JS
          Se eu não souber os dados do meu JSON,
          o stringify transforma em texto e o 4
          é p aumentar o espaçcamento */}
          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {/* <p>selectedAlternative:{`${selectedAlternative}`}</p> */}
          {isQuestionSubmited && isCorrect && <p>Você acertou !!!!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou !!!!</p>}
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  // Hook para mudançca de estado, o primeiro estado = primeira tela será a de RESULT
  const [screenState, setScreenState] = React.useState(screenStates.RESULT);
  // State para somar os pontos de acerto ou erro, começando com um array vazio
  const [results, setResult] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  // [React chamade efeitos: \\ Effects]
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch ...
    setTimeout(() => {
      // setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
    // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {/* Se screenState for igual a LOADING então mostrar o componente <LoadingWidget /> */}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você Acertou X Questões, Parabéns !!!!!</div>}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AlanFerreiraDev" />
    </QuizBackground>

  );
}
