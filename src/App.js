import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Users from './components/users';
import Test from './components/test';
import Join from './components/join';
import Navbar from './components/nav';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />


        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Switch>
          <Route path="/about">
            <Test />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
