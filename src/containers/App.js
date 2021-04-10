import React from 'react';
import { ReactComponent as DribbbleLogo } from '../icons/dribbble-logo.svg';
import { ReactComponent as GitHubLogo } from '../icons/github-logo.svg';
import { ReactComponent as LinkedInLogo } from '../icons/linkedin-logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="nav"></nav>
      <main>
        <section className="intro">
          <header>
            <h1 className="intro__name">Laura Griffee</h1>
          </header>

          <p className="intro__about">
            I’m a design engineer skilled at wireframing, prototyping, interface design, and front-end development. I love ensuring designs deliver value to users and that development delivers on that vision. I get excited about creating and maintaining design systems, building products end-to-end, and facilitating better collaboration between designers and engineers.
          </p>

          <p className="intro__links">
            <a title="LinkedIn" href="https://linkedin.com/in/laura-griffee/" target="_blank" rel="noopener noreferrer">
              <LinkedInLogo/>
            </a>
            <a title="GitHub" href="https://github.com/lgriffee/" target="_blank" rel="noopener noreferrer">
              <GitHubLogo/>
            </a>
            <a title="Dribbble" href="https://dribbble.com/laura-griffee" target="_blank" rel="noopener noreferrer">
              <DribbbleLogo/>
            </a>
          </p>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
