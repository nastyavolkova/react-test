import React, {useState} from "react";
import AttributesList from './Comment/AttributesList'
import AddComment from "./CommentForm/AddComment";


function App() {
    const [commentsInfo, setComments] = React.useState([
    ])
    const [newComments, setNewComment] = useState({
        name: '',
        mail: '',
        url: '',
        text: '',
    });
    const [timeAgo, setTime] = React.useState([])

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
      <div className='wrapper'>
        <h1>Комментарии</h1>
          <AddComment addComment = {addComment} setNewComment={setNewComment} newComment={newComments} />
          <AttributesList comments = {commentsInfo} changeRating = {changeRating}/>
      </div>
  );
}

export default App;
