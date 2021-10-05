import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Users from './components/users';
import Test from './components/test';
import Join from './components/join';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/users">사용자</Link>
            </li>
            <li>
              <Link to="/join">가입하기</Link>
            </li>
          </ul>
        </nav>

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
