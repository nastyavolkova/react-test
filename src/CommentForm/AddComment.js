import React, {useState} from "react";
import validator from "validator/es";
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const CustomizeButton = styled(Button) `
    background-color: #fff;
    color: #5a8678;
    border-color: #5a8678;
    &:hover {
        border-color: #5a8678;
    }
    margin: 20px auto 0
`;
const FormBox = styled(Box) `
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;
const CustomTextField = styled(TextField) `
    margin: 10px auto;
`;
 const AlertCenter = styled(Alert) `
     justify-content: center;
`;

function AddComment({addComment, setNewComment, newComment}) {
    const [errorMessage, setErrorMessage] = useState(false)
    const [emailError, setEmailError] = useState('');
    const validateEmail = (event) => {
        const email = event.target.value;
        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Неверный формат почты')
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

        if (noEmptyFields && emailError === '') {
            addComment(newComment);
            setNewComment({name: '', text: '', url: '', mail: '',});
            setEmailError('');
        }
        else {
            setErrorMessage(true);
        }

    }

    function handleChange(event) {
        setNewComment({
            ...newComment,
            [event.target.name]: event.target.value,
            id: Date.now(),
        });
        if (event.target.name === 'mail') {
            validateEmail(event);
        }
       setErrorMessage(false);
    }
    return (
            <FormBox component="form"
                 sx={{
                     '& .MuiTextField-root': { width: '40ch' },
                 }}
                 noValidate
                 autoComplete="off"
                 onSubmit={submitHandler}>
                { errorMessage === true &&
                    <AlertCenter severity="error">Проверьте поля формы</AlertCenter>
                }
                <CustomTextField
                    label="Имя"
                    variant="standard"

                    color="success"
                    name="name"
                    value={newComment.name}
                    onChange={handleChange}
                />
                <CustomTextField
                    error={emailError}
                    label="Почта"
                    variant="standard"
                    color="success"
                    helperText={emailError}
                    name="mail"
                    value={newComment.mail}
                    onChange={handleChange}
                />
                <CustomTextField
                    label="Ссылка на фото"
                    variant="standard"
                    name="url"
                    color="success"
                    value={newComment.url}
                    onChange={handleChange}
                />
                <CustomTextField
                    id="standard-multiline-flexible"
                    label="Комментарий"
                    multiline
                    variant="standard"
                    name="text"
                    color="success"
                    value={newComment.text}
                    onChange={handleChange}
                />
                <CustomizeButton variant="outlined" type="submit">Добавить комментарий</CustomizeButton>
            </FormBox>
    );
};

export default AddComment;
