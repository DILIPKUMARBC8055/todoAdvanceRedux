import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ToDoForm.css";
import { todoActions } from "../../redux/reducers/todoReducer";
import {
  notifcationActions,
  notifcationSelector,
  notificaitonReducer,
} from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(notifcationSelector);
  useEffect(() => {
    fetch("http://localhost:4100/api/todos/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(todoActions.add(todoText));
    setTimeout(() => {
      disptach(notifcationActions.reset());
    }, 3000);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {message && (
          <div class="alert alert-success" role="alert">
            {message}
          </div>
        )}

        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
