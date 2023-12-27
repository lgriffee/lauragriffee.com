import {NavLink} from '@remix-run/react';

import type {MetaFunction} from '@remix-run/node';
import type {LinksFunction} from '@remix-run/node';

import {GriffeeLogo} from '../components/icons';

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
        <nav className="top-bar-nav">
          <div className="top-bar-nav-logo">
            <NavLink to="/">
              <GriffeeLogo className="griffee-logo" />
            </NavLink>
            <NavLink to="/">Laura Griffee</NavLink>
          </div>
          <div className="top-bar-nav-links">
            <NavLink
              to="/"
              className={({isActive, isPending}) =>
                isPending
                  ? 'top-bar-nav-link-pending'
                  : isActive
                    ? 'top-bar-nav-link-active'
                    : ''
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive, isPending}) =>
                isPending
                  ? 'top-bar-nav-link-pending'
                  : isActive
                    ? 'top-bar-nav-link-active'
                    : ''
              }
            >
              About
            </NavLink>

            <NavLink
              to="/work"
              className={({isActive, isPending}) =>
                isPending
                  ? 'top-bar-nav-link-pending'
                  : isActive
                    ? 'top-bar-nav-link-active'
                    : ''
              }
            >
              Work
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <section></section>
      </main>
      <footer>
        <p>Designed and built by Laura Griffee using Remix, Open Props</p>
      </footer>
    </>
  );
}
