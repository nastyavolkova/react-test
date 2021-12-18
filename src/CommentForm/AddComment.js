import React, {useState} from "react";

function AddComment({addComment, setComment, comment}) {

    function submitHandler(event) {
        event.preventDefault();

        if(comment.length !== 0) {
            addComment(comment);
        }
        // setComment('');
    }

    function handleChange(event) {
        console.log(comment, '1')
        console.log({...comment}, '2')
        setComment({
            ...comment,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <input name="text" value={comment.text} onChange={handleChange}/>
            <input name="name" value={comment.name} onChange={handleChange}/>

            <button type="submit">Добавить комментарий</button>
        </form>
    );
};

export default AddComment;
