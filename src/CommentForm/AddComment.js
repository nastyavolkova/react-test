import React, {useState} from "react";
import validator from "validator/es";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
//import styled from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CustomizeButton = styled(Button) `
    background-color: #a7d0c3;
`;


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
        setEmailError('');
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

            <Box component="form"
                 sx={{
                     '& > :not(style)': { m: 1, width: '25ch' },
                 }}
                 noValidate
                 autoComplete="off"
                 onSubmit={submitHandler}>


                    <TextField error
                               id="standard-error-helper-text"
                               label="Имя"
                               defaultValue="Hello World"
                               helperText="Incorrect entry."
                               variant="standard"
                               name="name"
                               value={newComment.name}
                               onChange={handleChange}/>
                    <TextField

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

                <CustomizeButton variant="outlined" type="submit">Добавить комментарий</CustomizeButton>
            </Box>



    );
};

export default AddComment;
