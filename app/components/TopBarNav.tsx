import {NavLink} from '@remix-run/react';
import {useState} from 'react';

import {GriffeeLogo, Menu01, XClose} from './icons';

export default function TopBarNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      {isMenuOpen ? (
        <div className="backdrop">
          <nav className="menu"></nav>
        </div>
      ) : null}

      <nav className="top-bar-nav">
        <div className="brand">
          <NavLink to="/">
            <GriffeeLogo className="brand_logo" />
          </NavLink>
          <NavLink to="/" className="brand_name">
            Laura Griffee
          </NavLink>
        </div>
        <button className="menu_button" onClick={handleMenuClick}>
          <div>
            {isMenuOpen ? (
              <XClose className="menu_icon" />
            ) : (
              <Menu01 className="menu_icon" />
            )}
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
