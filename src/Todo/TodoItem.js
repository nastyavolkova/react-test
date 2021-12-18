import React from 'react'
import PropTypes from "prop-types";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem'
    }
}

function TodoItem({item, index, inputChange}) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" onChange={() => inputChange({index})}/>
                <strong>{index + 1 }</strong>
                {item.title}
            </span>
            <button>Жим</button>
        </li>
    )
}
TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem;

