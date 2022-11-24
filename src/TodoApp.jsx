import React, { useState } from 'react';
import { useGetTodosQuery, useTodoByIdQuery } from './store/apis/todoApi';

const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);

  const { data: todo, isLoading } = useTodoByIdQuery(todoId);

  return (
    <>
      <h1>Todo - RTQ Query</h1>

      <hr />

      <h3>Is Loading {isLoading ? 'Loading...' : 'Not Loading'}</h3>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={() => setTodoId(todoId <= 1 ? todoId : todoId + 1)}>
        Previous ToDo
      </button>
      <button onClick={() => setTodoId(todoId + 1)}>Next ToDo</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'Done' : 'Pending'}</strong> {todo.title}
          </li>
        ))}
      </ul> */}
      {/* <button>Next ToDo</button> */}
    </>
  );
};

export default TodoApp;
