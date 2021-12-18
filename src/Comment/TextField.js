import React from "react";
import PropTypes from 'prop-types';

function TextField({content, title}) {
    return (

        <div>
            <h3>
                {title}
            </h3>
            <div>
                {content}
            </div>
        </div>


    );
};

TextField.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default TextField;
