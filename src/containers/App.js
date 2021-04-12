import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import WorkPage from './Pages/WorkPage'
import CourseFinderPage from './Pages/Projects/CourseFinderPage'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/work/advanced-search-redesign">
            <CourseFinderPage/>
          </Route>

          <Route path="/work">
            <WorkPage/>
          </Route>

          <Route path="/about">
            <AboutPage/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
