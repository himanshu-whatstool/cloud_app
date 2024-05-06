/* eslint-disable react/prop-types */
import TodoContext from "./TodoContext"

const TodoState = (props) => {

  const todos = [{
    id: 1,
    todo: 'Hello World',
    completed: false
  }]

  const addTodo = (todo) => { }
  const deleteTodo = (id) => { }
  const updateTodo = (id, todo) => { }
  const toggleCompleted = (id) => { }

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoState


