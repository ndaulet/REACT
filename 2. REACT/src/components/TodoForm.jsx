import classes from './TodoForm.module.scss'

function TodoForm({ todos, setTodos, todoInputValue, setTodoInputValue }) {
    function addTodo(event) {
        event.preventDefault()
        if(!todoInputValue.trim()) {
            alert('Task name is empty!')
            return
        }
        const updatedTodos = [...todos, todoInputValue.trim()]
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
        setTodos(updatedTodos)
        setTodoInputValue('')
    }
    function changeInputValue(event) {
        setTodoInputValue(event.target.value)
    }
    return (
        <form className={classes.todoForm}>
            <input value={todoInputValue} onChange={changeInputValue} placeholder='Enter task name' type="text" />
            <button onClick={addTodo}>Add</button>
        </form>
    )
}
export default TodoForm