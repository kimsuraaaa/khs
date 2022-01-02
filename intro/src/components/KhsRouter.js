import React from 'react';
// import { Route, Switch } from 'react-router';
import Intro from './intro/Intro';
import MBTI from './MBTI/MBTIMain';
import Interaction from './interaction/ScrollMotion';
import YTA from './interaction/YTA';
import TheoryList from './Theory/TheoryList';
import TheoryDetail from './Theory/TheoryDetail';
import NotFoundPage from './common/NotFoundPage';
import Begin from './intro/Begin';
import Main from './main/Main';
import { BrowserRouter } from 'react-router-dom';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export default function KhsRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Intro} />
          <Route path="/begin" component={Begin} />
          <Route path="/mbti" component={MBTI} />
          <Route path="/main" component={Main} />

          <Route path="/yta" component={YTA} />
          <Route path="/interaction" component={Interaction} />
          <Route path="/theory" component={TheoryList} />
          <Route path="/theoryDetail" component={TheoryDetail} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
        
        <Route path="/" exact={true} component={Intro} />
        <Route path="/begin" component={Begin} />
        <Route path="/mbti" component={MBTI} />
        <Route path="/main" component={Main} />

        <Route path="/yta" component={YTA} />
        <Route path="/interaction" component={Interaction} />
        <Route path="/theory" component={TheoryList} />
        <Route path="/theoryDetail" component={TheoryDetail} />
        <Route path='*' component={NotFoundPage} />
      </BrowserRouter> */}
      {/* <Switch>
        <Route path="/khs" exact={true} component={Intro} />
        <Route path="/khs/begin" component={Begin} />
        <Route path="/khs/mbti" component={MBTI} />
        <Route path="/khs/main" component={Main} />

        <Route path="/khs/yta" component={YTA} />
        <Route path="/khs/interaction" component={Interaction} />
        <Route path="/khs/theory" component={TheoryList} />
        <Route path="/khs/theoryDetail" component={TheoryDetail} />
        <Route path='*' component={NotFoundPage} />
      </Switch> */}
    </>
  )
}