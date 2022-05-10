// Pre-HOOKS implementation...
// import React from "react";

// post-HOOKS implementation...
import React, { useContext, useState } from "react";

import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

/* Pre-HOOKS implementation...
// Here we are using the Static method for applying the themes
// (see Navbar.js for the Context Consumer method)

class TodoList extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div
        style={{
          background: theme.background,
          color: theme.text,
          height: "140px",
          textAlign: "center",
          paddingTop: "10px",
        }}
      >
        <p className="item">Plan the family trip</p>
        <p className="item">Go shopping for dinner</p>
        <p className="item">Go for a walk</p>
        <button className="ui button primary" onClick={changeTheme}>
          change the theme
        </button>
      </div>
    );
  }
}
*/

// Post-HOOKS implementation...
const TodoList = () => {
  const [todo, setTodo] = useState("");

  const { todos, addTodo, removeTodo } = useContext(TodoListContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
  };

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    removeTodo(id);
  };
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        textAlign: "center",
        paddingTop: "10px",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p
              id={todo.id}
              onClick={handleRemoveTodo}
              key={todo.id}
              className="item"
            >
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no Todos</div>
      )}
      {/* <p className="item">Plan the family trip</p>
      <p className="item">Go shopping for dinner</p>
      <p className="item">Go for a walk</p> */}

      {/* Add a form and button for the new todo entries */}
      <form onSubmit={handleFormSubmit}>
        <label
          style={{
            color: "white",
            background: "gray",
            padding: "10px",
            borderRadius: "5px",
          }}
          htmlFor="todo"
        >
          Add ToDo:{"  "}
        </label>
        <input type="text" id="todo" onChange={handleChange} />
        <input type="submit" value="Submit" className="ui button primary" />
      </form>
      <button className="ui button primary" onClick={changeTheme}>
        change the theme
      </button>
    </div>
  );
};

export default TodoList;
