import {NavLink} from '@remix-run/react';

import {GriffeeLogo, Menu01} from './icons';

export default function TopBarNav() {
  return (
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
  );
}
