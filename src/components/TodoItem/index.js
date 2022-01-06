import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodoList} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteTodoList(id)
  }

  return (
    <li className="todo-container">
      <p className="list-name">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
