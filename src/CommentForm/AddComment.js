import React, {useState} from "react";

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
    }
}
function AddComment({addComment, setNewComment, newComment}) {

    function submitHandler(event) {
        event.preventDefault();

        if(newComment.length !== 0) {
            addComment(newComment);
        }
        setNewComment({name: '', text: '', url: '', mail: '',});
    }

    function handleChange(event) {
        setNewComment({
            ...newComment,

            [event.target.name]: event.target.value,
        });

    }

    return (
        <form onSubmit={submitHandler} style={styles.form}>
            <label>
                Имя
                <input name="name" value={newComment.name} onChange={handleChange}/>
            </label>
            <label>
                Почта
                <input name="mail" value={newComment.mail} onChange={handleChange}/>
            </label>

            <label>
                Ссылка на фото
                <input name="url" value={newComment.url} onChange={handleChange}/>
            </label>
            <label>
                Комментарий
                <textarea name="text" value={newComment.text} onChange={handleChange}/>
            </label>



            <button type="submit">Добавить комментарий</button>
        </form>
    );
};

export default AddComment;
