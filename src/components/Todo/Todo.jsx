import React, { useState, useEffect } from "react";
// import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchTodos,
  postTodos,
  putTodos,
  deleteTodos
} from "../../actions/modelParamActionCreator";
import Form from "../Form/Form";
import "./Todo.css";

const Todo = props => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [formBody, setFormBody] = useState("");

  const firstMountRun = props.fetchTodos;
  useEffect(() => {
    firstMountRun();
  }, [firstMountRun]);

  const onKeyDown = event => {
    if (event.shiftKey && event.keyCode === 13) {
      const trimFormBody = formBody.trim();
      // 入力値が有り、かつ、既存内容と異なる場合に更新が実行される
      if (trimFormBody && trimFormBody !== selectedTodo.body) {
        props.putTodos({
          id: selectedTodo.id,
          body: formBody
        });
      }
      setSelectedTodo(null);
    }
  };

  const inputBodyForm = () => {
    return (
      <input
        id="standard-basic"
        value={formBody}
        onChange={event => setFormBody(event.target.value)}
        onKeyDown={onKeyDown}
      />
    );
  };

  const onClickBody = todo => {
    setSelectedTodo(todo);
    setFormBody(todo.body);
  };

  if (props.isLoading) return <h1>Now Loading...</h1>;

  if (props.todos.length) {
    const todoItems = props.todos.map(todo => {
      const { id, title, body, complete, createdAt, updatedAt } = todo;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{title}</td>
          <td onClick={() => onClickBody(todo)}>
            {selectedTodo === todo ? inputBodyForm() : body}
          </td>
          <td>
            <button
              onClick={() => props.putTodos({ id, complete: !complete })}
              color={complete ? "primary" : "secondary"}
            >
              {complete ? "完了" : "未完了"}
            </button>
          </td>
          <td>{createdAt.toLocaleString("ja-JP")}</td>
          <td>{updatedAt.toLocaleString("ja-JP")}</td>
          <td>
            <button
              onClick={() => props.deleteTodos(id)}
              variant="outlined"
              color="secondary"
            >
              DELETE
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <h1>Todo List</h1>
        <Form />
        <hr />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Completed</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{todoItems}</tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>Todo App</h1>
      <Form />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    todos: state.todos,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => {
      dispatch(fetchTodos());
    },
    postTodos: ({ title, body }) => {
      dispatch(postTodos({ title, body }));
    },
    putTodos: ({ id, title, body, complete }) => {
      dispatch(putTodos({ id, title, body, complete }));
    },
    deleteTodos: id => {
      dispatch(deleteTodos(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
