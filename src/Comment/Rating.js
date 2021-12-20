import React, {useState} from "react";
import styled from "styled-components";



const RatingDiv = styled.div `
    display: ${({showRating}) => showRating ? 'block' : 'none'}
`;
const RatingString = styled.div `
    display: ${({showString}) => showString ? 'block' : 'none'}
`;

function Rating({comment, changeRating}) {
    function handleButton(modification) {
        changeRating(comment.id, modification);
        checkRating();
    }
    let showString = comment.rating <= -10;
    let [visible, setVisible] = useState(true);

    function checkRating() {
        if (comment.rating == -10 && showString == false) {
            setVisible(false);
        }
    }
    function changeVisible() {
        setVisible(!visible);
    }
    return (
        <div>
            <RatingString showString = {showString}>Открыть комментарий<button onClick={() => {changeVisible()}}>&#9660;</button></RatingString>

            <RatingDiv showRating = {visible}>
                <p> Рейтинг комментария: {comment.rating} </p>
                <button type="button" onClick={() => {handleButton(1)}}>Плюс</button>
                <button type="button" onClick={() => {handleButton(-1)}}>Минус</button>
            </RatingDiv>

        </div>
    )


}

export default Rating;
