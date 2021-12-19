import React from "react";

function Rating({comment, changeRating}) {
    function handleButton(id, modification) {
        changeRating(id, modification);
    }
    return (
        <div>
            Рейтинг комментария: {comment.rating}
            <button type="button" onClick={() => {handleButton(comment.id, 1)}}>Плюс</button>
            <button type="button" onClick={() => {handleButton(comment.id, -1)}}>Минус</button>
        </div>
    )
}

export default Rating;
