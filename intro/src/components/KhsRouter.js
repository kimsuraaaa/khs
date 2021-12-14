import React from 'react';
import { Route, Switch } from 'react-router';
import Intro from './intro/Intro';
import MBTI from './MBTI/MBTIMain';
import Interaction from './interaction/ScrollMotion';
import YTA from './interaction/YTA';
import TheoryList from './Theory/TheoryList';
import TheoryDetail from './Theory/TheoryDetail';
import NotFoundPage from './common/NotFoundPage';
import Begin from './intro/Begin';
import Main from './main/Main';

export default function KhsRouter(){
  return(
    <>
      <Switch>
        <Route path="/" exact={true} component={Intro} />
        <Route path="/begin" component={Begin} />
        <Route path="/mbti" component={MBTI} />
        <Route path="/main" component={Main} />





        <Route path="/yta" component={YTA} />

       {/* <Route path="/" exact={true} component={Intro} /> */}
       <Route path="/interaction" component={Interaction} />        
       <Route path="/theory" component={TheoryList} />
       <Route path="/theoryDetail" component={TheoryDetail} />
       <Route path='*' component={NotFoundPage} />
     </Switch>
    </>
  )
}