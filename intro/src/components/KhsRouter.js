import React from 'react';
import { Route, Switch } from 'react-router';
import Intro from './intro/Intro';
import MBTI from './MBTI/MBTIMain';
import Interaction from './interaction/ScrollMotion';
import TheoryList from './Theory/TheoryList';
import TheoryDetail from './Theory/TheoryDetail';

export default function KhsRouter(){
  return(
    <Switch>
      <Route path="/intro" component={Intro} />
      <Route path="/interaction" component={Interaction} />
      <Route path="/mbti" component={MBTI} />
      <Route path="/theory" component={TheoryList} />
      <Route path="/theoryDetail" component={TheoryDetail} />
    </Switch>
  )
}