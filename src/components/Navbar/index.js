// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
//   light = true
//   dark = false

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="light-navbar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="link-container">
                <li className="list-item">
                  <Link to="/" className="light-link">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="light-link">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-change-button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme button"
                  className="theme-img"
                />
              </button>
            </div>
          ) : (
            <div className="dark-navbar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="link-container">
                <li className="list-item">
                  <Link to="/" className="dark-link">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="dark-link">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-change-button"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme button"
                  className="theme-img"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
