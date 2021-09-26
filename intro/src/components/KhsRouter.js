import React from 'react';
import { Route, Switch } from 'react-router';
import Intro from './intro/Intro';
import MBTI from './MBTI/MBTIMain';
import Interaction from './interaction/ScrollMotion';
import Test from './Test';

export default function KhsRouter(){
  return(
    <Switch>
      <Route path="/intro" component={Intro} />
      <Route path="/Interaction" component={Interaction} />
      <Route path="/MBTI" component={MBTI} />
      <Route path="/Test" component={Test} />
    </Switch>
  )
}