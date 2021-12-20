import React from 'react'
import PropTypes from 'prop-types';
import Avatar from './Avatar.js';
import TextField from "./TextField";
import Rating from "./Rating";
import DateField from "./DateField";


function AttributesList({comments, changeRating}) {
    return (
        <div>
            {comments.map((item) => {
                return (
                    <div  key={item.id}>
                        <Avatar url = {item.url}/>
                        <TextField content = {item.name} title = 'Имя' />
                        <TextField content = {item.mail} title = 'Почта' />
                        <TextField content = {item.text} title = 'Комментарий'/>
                        <Rating comment = {item} changeRating = {changeRating}/>
                        <DateField date = {item.date}/>
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
