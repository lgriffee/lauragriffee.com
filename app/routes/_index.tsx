import {NavLink} from '@remix-run/react';

import type {MetaFunction} from '@remix-run/node';
import type {LinksFunction} from '@remix-run/node';

import {GriffeeLogo, Menu01} from '../components/icons';

import styles from '../styles/shared.css';

export const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}];

const experienceStartDate = new Date('2019-02-01T00:00:00');
const currentDate = new Date();
const timeDifference = currentDate.getTime() - experienceStartDate.getTime();
const yearsDifference = timeDifference / (1000 * 3600 * 24 * 365.25);
const experienceYears = Math.floor(yearsDifference);

export const meta: MetaFunction = () => {
  return [
    {title: 'Laura Griffee'},
    {
      name: 'description',
      content: `Front-end developer and interface designer with ${experienceYears}+ years of experience building design systems for global non-profit and tech companies.`,
    },
  ];
};

export default function Index() {
  return (
    <>
      <header>
        <div className="backdrop">
          <nav className="menu"></nav>
        </div>
        <nav className="top-bar-nav">
          <div className="brand">
            <NavLink to="/">
              <GriffeeLogo className="brand_logo" />
            </NavLink>
            <NavLink to="/" className="brand_name">
              Laura Griffee
            </NavLink>
          </div>
          <button className="menu_button">
            <div>
              <Menu01 className="menu_icon" />
            </div>
          </button>
          <div className="links">
            <NavLink
              to="/"
              className={({isActive, isPending}) =>
                isPending ? 'link--pending' : isActive ? 'link--active' : ''
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive, isPending}) =>
                isPending ? 'link--pending' : isActive ? 'link--active' : ''
              }
            >
              About
            </NavLink>

            <NavLink
              to="/work"
              className={({isActive, isPending}) =>
                isPending ? 'link--pending' : isActive ? 'link--active' : ''
              }
            >
              Work
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <section>Content here!</section>
      </main>
      <footer>
        <p>Designed and built by Laura Griffee</p>
      </footer>
    </>
  );
}
