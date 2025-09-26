export const ImcompleteTodos = (props) => {
    const { imcompleteTodos, onClickComplete, onClickDelete } = props;
    return (
        <div className="imcomplete-area">
            <p className="title">imcompleted TODO</p>
            <ul>
                {imcompleteTodos.map((todo, index) => (
                    <li key={todo}>
                        <div className="list-row">
                            <p className="todo-item">{todo}</p>
                            <button onClick={() => onClickComplete(index)}>complete</button>
                            <button onClick={() => onClickDelete(index)}>delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}