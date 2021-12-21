import React, {useState} from "react";
import AttributesList from './Comment/AttributesList'
import AddComment from "./CommentForm/AddComment";

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import CommentIcon from '@mui/icons-material/Comment';
import Button from "@mui/material/Button";



const CustomizeAppBar = styled(AppBar) `
    background-color: #5a8678;
    margin-bottom: 20px;
`;

function App() {
    const [commentsInfo, setComments] = React.useState([
    ])
    const [newComments, setNewComment] = useState({
        name: '',
        mail: '',
        url: '',
        text: '',
    });
    function changeRating(id, modification) {
       let updateComments = commentsInfo.map((comment) => {
            if (comment.id === id) {
                return {
                    ...comment,
                   rating: comment.rating += modification,
                }
            }
            return comment;
        });
       setComments(updateComments);
    }

    function addComment(value) {
        setComments(commentsInfo.concat([{
            id: Date.now(),
            rating: 0,
            date: "just now",
            ...value,
        }]))
    }

  return (
      <Container fixed>
          <CustomizeAppBar position="static">
              <Toolbar>
                  <CommentIcon fontSize="large"/>
                  <Typography px={1} variant="h6" component="div" >
                      Comments
                  </Typography>
              </Toolbar>
          </CustomizeAppBar>
          <AddComment addComment = {addComment} setNewComment={setNewComment} newComment={newComments} />
          <AttributesList comments = {commentsInfo} changeRating = {changeRating}/>
      </Container>
  );
}

export default App;
