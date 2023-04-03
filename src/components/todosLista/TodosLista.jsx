import Todo from "../todo/Todo";
import todos from "../../mock/toDo";
import "./index.css";
import { useState } from "react";

const TodosLista = () => {
  const [todo, setTodo] = useState(todos);
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);

  const inputAdd = (e) => {
    e.preventDefault();

    const newTodo = {
      title: input,
      completed: false,
    };

    setTodo((todo) => {
      if (
        !todo.find((item) => item.title.toLowerCase() === input.toLowerCase())
      ) {
        return [newTodo, ...todo];
      } else {
        setAlert(true);
        return todo;
      }
    });

    // setTodo([newTodo, ...todo]);
    setAlert(false);
    setInput("");
  };

  const deleteTodo = (title) => {
    setTodo(todo.filter((item) => item.title !== title));
  };

  return (
    <div className="TodosLista">
      <h1>Lista delle cose da fare</h1>
      {alert && <p>Elemento già esistente</p>}
      <form onSubmit={inputAdd} className="TodosLista__form-add">
        <input
          className="input"
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <input className="submit" type="submit" value="+Aggiungi" />
      </form>
      {todo
        .sort((item1, item2) =>
          item1.title.toLowerCase() >= item2.title.toLowerCase() ? 1 : -1
        )
        .map((item, i) => (
          <Todo deleteTodo={deleteTodo} setTodo={setTodo} item={item} key={i} />
        ))}
    </div>
  );
};
export default TodosLista;
