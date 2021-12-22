import React from 'react'
import Photo from './Avatar.js';
import Rating from "./Rating";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import {styled} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

const FlexContainer = styled(Container) `
    display:flex;
    flex-wrap: wrap;
`;



function AttributesList({comments, changeRating}) {
    return (
        <FlexContainer>
            {comments.map((item) => {
                return (
                    <Card sx={{ width: 250, m: 1}}  key={item.id}>
                        <CardHeader
                            avatar={
                                <Photo url = {item.url}/>
                            }
                            subheader={item.date}
                            sx = {{paddingBottom: 0}}
                        ></CardHeader>

                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {item.name}
                            </Typography>
                            <Typography gutterBottom variant="body2" mb={2} >
                                {item.mail}
                            </Typography>
                            <Typography sx={{color: "#5a8678", fontSize: 20}} variant="body2" color="text.secondary">
                                {item.text}
                            </Typography>

                            <Rating comment = {item} changeRating = {changeRating}/>

                        </CardContent>
                    </Card>
                )
            })}
        </FlexContainer>
    );
};

export default AttributesList;
