import React from 'react'
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const List = styled.ul`
    padding: 10px;
    
    color: ${props => props.color === 'white' ? 'white' : 'black'}
`

const styles = {
    ul: {
        listStyle:'none',
        margin: 0,
        padding: 0
    }
}
function TodoList (props) {
    return (
        <List color="white" style={styles.ul}>
            {props.deals.map((deal, index) => {
                return <TodoItem item = {deal} key={deal.id} index={index} inputChange={props.changeInput}/>
            })}
        </List>
    )
}

TodoList.propTypes = {
    deals: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default TodoList;
