import { useState } from 'react';
import Index from './Component/PageOne/Index'
import './main.css';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import PageThree from './Component/PageThree/Ques';
import Result from './Component/Result/Index'
import Style from './Component/Result/Style';

function App() {
  console.log(parseFloat(Style))
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/quiz'>
            <PageThree/>
          </Route>
          <Route path='/result'>
            <Result/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
