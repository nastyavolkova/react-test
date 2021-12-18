import React from 'react'
import PropTypes from "prop-types";
import logo from './frog.jpg';

const styles = {
    img: {
        width: '100px',
        height: '100px'

    }
}
function Avatar({index}) {
    return (
        <div>
            <h3>{index} Аватар</h3>
            <img src={logo} style={styles.img}/>
        </div>
    );
};
export default Avatar;
