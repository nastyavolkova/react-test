import React, {useState} from "react";
import TodoList from "./Todo/TodoList";
import AttributesList from './Comment/AttributesList'
import AddComment from "./CommentForm/AddComment";


// eslint-disable-next-line require-jsdoc
function App() {
    const [commentsInfo, setComments] = React.useState([
    ])
    const [comment, setNewComment] = useState({
        text: '',
        name: '',

    });

    function changeRating(id) {
        const comment = commentsInfo.find((comment) => {
            return comment.id === id
        })
        setComments(commentsInfo)
    }

    function addComment(value) {
        setComments(commentsInfo.concat([{
            id: Date.now(),
            rating: 0,
            ...value,
        }]))
    }
    const commentsInfo1 = [
        {id:1, name: 'Сыр', text: 'Не нравится, когда не дают лазить на стол!'},
        {id:2, name: 'Денис', text: 'Молодец'},
        {id:3, name: 'Ваня', text: 'Мммммм, that`s ten'},
    ]
  return (
      <div className='wrapper'>
        <h1>Комментарии</h1>
          <AddComment addComment = {addComment} setComment={setNewComment} comment={comment} />
          <AttributesList comments = {commentsInfo} changeRating = {changeRating}/>

      </div>
  );
}

export default App;
