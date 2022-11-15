// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div className="about-container">
            {!isDarkTheme ? (
              <div className="light-about-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="about-img"
                />
                <h1 className="about-heading-light">About</h1>
              </div>
            ) : (
              <div className="dark-about-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="about-img"
                />
                <h1 className="about-heading-dark">About</h1>
              </div>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
