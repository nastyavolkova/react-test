import React from 'react'
import PropTypes from "prop-types";


const styles = {
    img: {
        width: '100px',
        height: '100px'

    }
}
function Avatar({index, url}) {
    return (
        <div>
            <h3>{index}</h3>
            <img src={url} alt='Аватар' style={styles.img}/>
        </div>
    );
};
export default Avatar;
