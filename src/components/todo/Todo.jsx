import { HiOutlineTrash } from "react-icons/hi";
import "./index.css";

const Todo = ({ item, deleteTodo, setTodo }) => {
  // const [completed, setCompleted] = useState(item.completed);

  const toggleTodo = () => {
    // setCompleted((prev) => !prev);
    setTodo((prev) => [
      ...prev.filter((todo) => todo.title !== item.title),
      {
        title: item.title,
        completed: !item.completed,
      },
    ]);
  };

  return (
    <div className="Todo">
      <div
        onClick={toggleTodo}
        className={`pallino ${item.completed && "completed"}`}
      ></div>
      <p className={`title ${item.completed && "decoration"}`}>{item.title}</p>
      <HiOutlineTrash
        onClick={() => deleteTodo(item.title)}
        className="trash"
      />
    </div>
  );
};
export default Todo;
