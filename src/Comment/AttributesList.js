import React from 'react'
import PropTypes from 'prop-types';
import Avatar from './Avatar.js';
import TextField from "./TextField";


function AttributesList(props) {
    function handleButton(id) {
        props.changeRating(id)
    }
    return (
        <div>
            {props.comments.map((item) => {
                return (
                    <div  key={item.id}>
                        <Avatar index = {item.id}/>
                        <TextField content = {item.name} title = 'Имя' />
                        <TextField content = {item.text} title = 'Комментарий'/>
                        <button type="button" onClick={() => {handleButton(item.id)}}>Плюс</button>
                    </div>
                )
            })}

        </div>
    );
};

AttributesList.propType = {
  item: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AttributesList;
