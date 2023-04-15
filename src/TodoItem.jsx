function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </label>
    </li>
  );
}

export default TodoItem;
