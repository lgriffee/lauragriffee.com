import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="nav"></nav>
      <main>
        <section className="intro">
          <header>
            <h1 className="intro__name">Laura Griffee.</h1>
          </header>

          <p className="intro__about">
            I’m a UI/UX Developer skilled at user experience design (wireframing, prototyping, and testing), interface design, and front-end development. I love ensuring designs deliver value to users and that development delivers on that vision. I get excited about maintaining design systems, building products end-to-end, and bridging the gap between design and engineering.
          </p>

          <p className="intro__links">
            <a title="LinkedIn" href="https://linkedin.com/in/laura-griffee/" target="_blank">LinkedIn</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a title="GitHub" href="https://github.com/lgriffee/" target="_blank">GitHub</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a title="InVision Talks" href="https://www.invisionapp.com/talks/designsystemsuccess" target="_blank">InVision Talks</a>
          </p>

        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
