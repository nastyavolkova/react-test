import React, {useState} from "react";
import validator from "validator/es";

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
    }
}
function AddComment({addComment, setNewComment, newComment}) {
    const [emailError, setEmailError] = useState('');
    const validateEmail = (event) => {
        const email = event.target.value;

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    let noEmptyFields =true;
    function checkEmptyField() {
        for (let field in newComment) {
            if (newComment[field].length === 0) {
                noEmptyFields = false;
            }
        }
    }
    function submitHandler(event) {
        event.preventDefault();

        checkEmptyField();
        console.log(noEmptyFields)
        console.log(emailError)
        noEmptyFields && emailError === '' ? addComment(newComment) : alert('Проверьте поля формы');

        setNewComment({name: '', text: '', url: '', mail: '',});
    }

    function handleChange(event) {
        setNewComment({
            ...newComment,
            [event.target.name]: event.target.value,
            id: Date.now(),
        });
        if (event.target.name === 'mail') {
            validateEmail(event)
        }
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
                <span style={{fontWeight: 'bold', color: 'red',}}>{emailError}</span>
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
