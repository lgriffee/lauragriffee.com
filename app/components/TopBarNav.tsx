import {NavLink} from '@remix-run/react';
import {useState, useEffect} from 'react';

import {GriffeeLogo, Menu01, XClose} from './icons';

export default function TopBarNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function handleMenuClick() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div
        className={
          isMobileNavOpen
            ? 'mobile-nav_backdrop--active'
            : 'mobile-nav_backdrop'
        }
      >
        <nav
          className={
            isMobileNavOpen ? 'mobile-nav_drawer--active' : 'mobile-nav_drawer'
          }
        ></nav>
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
        <button className="mobile-nav_toggle" onClick={handleMenuClick}>
          <div>
            {isMobileNavOpen ? (
              <XClose className="mobile-nav_icon" />
            ) : (
              <Menu01 className="mobile-nav_icon" />
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
