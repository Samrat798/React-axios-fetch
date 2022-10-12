import axios from "axios";
import { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState(null);
  // https://jsonplaceholder.typicode.com/todos/
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => setTodo(res.data))
      .catch((error) => setError(error));
  });

  const clickHandler = (event) => {
    event.target.classList.toggle("crosss-line");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody id="remove">
          {todo.map((item, index) => (
            <tr key={index} id="task">
              <td>{item.userId}</td>
              <td
                onClick={clickHandler}
                className={item.completed ? "crosss-line" : null}
              >
                {item.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
