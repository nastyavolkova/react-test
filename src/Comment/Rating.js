import React, {useState} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const RatingDiv = styled(ButtonGroup)`
    color: #777575;
    text-align: center;
    button {
        color: #777575;
        border-color: #777575;
        &:hover {
            border-color: #777575;
        }
    }
    display: ${({showRating}) => showRating ? 'block' : 'none'}
`;
const RatingString = styled(Button) `
    color: #777575;
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
        if (comment.rating === -10 && showString === false) {
            setVisible(false);
        }
    }
    function changeVisible() {
        setVisible(!visible);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <RatingString showString = {showString} onClick={() => {changeVisible()}}>Показать рейтинг</RatingString>
            <RatingDiv size="small"
                        showRating = {visible}
            >
                <Typography sx={{py: 1}}variant="body2"> Рейтинг {0 || comment.rating } </Typography>
                <Button type="button" onClick={() => {handleButton(1)}}>Плюс</Button>
                <Button type="button" onClick={() => {handleButton(-1)}}>Минус</Button>
            </RatingDiv>

        </Box>
    )
}
export default Rating;
