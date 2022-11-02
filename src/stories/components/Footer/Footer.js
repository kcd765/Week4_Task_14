import React from 'react'
import './footer.css'
import PropTypes from 'prop-types'

export const Footer = ({ color1, color2, height }) => {
    const style = {
        background: `linear-gradient(to right, ${color1}, ${color2})`,
        height
    }
    return (
        <div className="footer" style={style}>
            <p>&copy; 2022 Wildlife Association of Singapore</p>
        </div>
    )
}

Footer.propTypes = {
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    height: PropTypes.string
};

Footer.defaultProps = {
    color1: "#ff5f6d",
    color2: "#ffc371",
    height: "10%"
};