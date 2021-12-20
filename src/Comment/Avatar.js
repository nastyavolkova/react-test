import React from 'react'
import PropTypes from "prop-types";

const styles = {
    img: {
        width: '100px',
        height: '100px'
    }
}
function Avatar({url}) {
    return (
        <div>
            <img src={url} alt='Аватар' style={styles.img}/>
        </div>
    );
};
export default Avatar;
