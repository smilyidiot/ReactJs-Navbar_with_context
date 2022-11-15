// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="not-found-container">
              <Navbar />
              <div className="light-not-found-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="not-found-image"
                  alt="not found"
                />
                <h1 className="light-not-found-heading">Lost Your Way?</h1>
                <p className="light-not-found-para">
                  We cannot seem to find the page
                </p>
              </div>
            </div>
          ) : (
            <div className="not-found-container">
              <Navbar />
              <div className="dark-not-found-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="not-found-image"
                  alt="not found"
                />
                <h1 className="dark-not-found-heading">Lost Your Way?</h1>
                <p className="dark-not-found-para">
                  We cannot seem to find the page
                </p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
