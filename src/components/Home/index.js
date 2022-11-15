// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div className="home-container">
            {!isDarkTheme ? (
              <div className="light-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="light-home"
                />
                <h1 className="home-heading-light">Home</h1>
              </div>
            ) : (
              <div className="dark-home-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="dark-home"
                />
                <h1 className="home-heading-dark">Home</h1>
              </div>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
