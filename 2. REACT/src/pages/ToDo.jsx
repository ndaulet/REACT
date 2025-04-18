import { useState } from 'react'
import classes from './Todo.module.scss'
import TodoItem from '../TodoItem/TodoItem'
import TodoForm from '../components/TodoForm'

function TodoPage() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [todoInputValue, setTodoInputValue] = useState('')

    const todosItems = todos.map((todo, index) => {
        return (
            <TodoItem
                key={index}
                taskName={todo}
                setTodos={setTodos}
                todos={todos}
                todoIndex={index}
            /> 
        )
    })
    return (
        <div className={classes.container}>
            <h1>Todo List</h1>
            <TodoForm
                todos={todos}
                setTodos={setTodos}
                todoInputValue={todoInputValue}
                setTodoInputValue={setTodoInputValue}
            />
            <div className={classes.todoList}>
                {todosItems}
            </div>
        </div>
    )
}
export default TodoPage
