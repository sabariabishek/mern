import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../modules/Home/Home';
import About from '../../modules/About/About';
import Blog from '../../modules/Blog/Blog';

const Main = (props) => {
  const { projectData, aboutInfo } = props;

  return (
    <Switch> 
      <Route exact path='/projects' render={(props) => <Home {...props} />}></Route>
      <Route exact path='/' render={(props) => <About {...props} 
        projectData={projectData} 
        aboutInfo={aboutInfo}/>}>
      </Route>
      <Route exact path='/contact' render={(props) => <Home {...props} 
        projectData={projectData}/>}>
      </Route>
      <Route exact path='/blog' render={(props) => <Blog {...props} />}>
      </Route>
    </Switch>
  );
}

export default Main;