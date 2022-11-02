import React from 'react'
import PropTypes from 'prop-types';
import Logo from '../../../images/Wildlife_logo.png'
import './header.css'

export const Header = ({backgroundColor, color}) => {
    return (
        <div className='navbar'>
        <div className='container' style={{backgroundColor: backgroundColor}}>
          <div className='logo'>
            <img src={Logo} />
          </div>
          <div className='links' style={{color}}>
              <h6>Join Our Team</h6>
              <h6>Contact Us</h6>
              <h6>Services</h6>
          </div>    
        </div>  
      </div>
    )
}

Header.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

Header.defaultProps = {
    backgroundColor: "blue",
    color: "white"
};