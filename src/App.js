import React from 'react';
import './App.scss';
import Loader from "react-loader-spinner";
import { Suspense } from 'react'
import { QuizContext, CultPageProvider, HistPageProvider, TechPageProvider, MotoPageProvider, CultQuestionStandardProvider, HistQuestionStandardProvider, MotoQuestionStandardProvider, TechQuestionStandardProvider } from "./context/Context";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Homepage = React.lazy(() => import('./pages/homepage'));
const Firstpage = React.lazy(() => import('./components/firstpage'));
const Standardquestions = React.lazy(() => import('./components/standardquestions'));
const Draganddropquest = React.lazy(() => import('./components/draganddropquestions'));
const EndScreen = React.lazy(() => import('./components/enddraganddrop'));

function App() {
  const [gameState, setGameState] = useState("homepage");
  const [score, setScore] = useState(0);
  return (

    <Suspense fallback={<Loader
      type="Circles"
      color="#00BFFF"
      height={800}
      width={800}
      timeout={3000} //3 secs
      style={{ textAlign: 'center', verticalAlign: 'center' }}
    />}>
      <Router>
        <Switch>

          <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>

            <Route exact path='/' component={Homepage} />
            <Route exact path='/Firstpagecode' component={Firstpage} />

            <CultPageProvider>
              <Route exact path='/Firstpagecult' component={Firstpage} />
            </CultPageProvider>
            <HistPageProvider>
              <Route exact path='/Firstpagehist' component={Firstpage} />
            </HistPageProvider>
            <MotoPageProvider>
              <Route exact path='/Firstpagemoto' component={Firstpage} />
            </MotoPageProvider>
            <TechPageProvider>
              <Route exact path='/Firstpagetech' component={Firstpage} />
            </TechPageProvider>
            <Route exact path='/Standardquestionscode' component={Standardquestions} />
            <Route exact path='/Codedraganddropcode' component={Draganddropquest} />
            <CultQuestionStandardProvider>
              <Route exact path='/Standardquestionscult' component={Standardquestions} />
              <Route exact path='/Codedraganddropcult' component={Draganddropquest} />
              <Route exact path='/EndScreenDragandDropCult' component={EndScreen} />
            </CultQuestionStandardProvider>
            <HistQuestionStandardProvider>
              <Route exact path='/Standardquestionshist' component={Standardquestions} />
              <Route exact path='/Codedraganddrophist' component={Draganddropquest} />
              <Route exact path='/EndScreenDragandDropHist' component={EndScreen} />
            </HistQuestionStandardProvider>
            <MotoQuestionStandardProvider>
              <Route exact path='/Standardquestionsmoto' component={Standardquestions} />
              <Route exact path='/Codedraganddropmoto' component={Draganddropquest} />
              <Route exact path='/EndScreenDragandDropMoto' component={EndScreen} />
            </MotoQuestionStandardProvider>
            <TechQuestionStandardProvider>
              <Route exact path='/Standardquestionstech' component={Standardquestions} />
              <Route exact path='/Codedraganddroptech' component={Draganddropquest} />
              <Route exact path='/EndScreenDragandDropTech' component={EndScreen} />
            </TechQuestionStandardProvider>
            <Route exact path='/EndScreenDragandDropCode' component={EndScreen} />
          </QuizContext.Provider >
        </Switch>

      </Router>
    </Suspense>
  );
}

export default App;
