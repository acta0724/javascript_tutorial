export const CompleteTodos = (props) => {
    const { completeTodos, onClickReturn} = props;
    return (
        <div className="complete-area">
            <p className="title">completed TODO</p>
            <ul>
                {completeTodos.map((todo, index) => (
                    <li key={todo}>
                        <div className="list-row">
                            <p className="todo-item">{todo}</p>
                            <button onClick={() => onClickReturn(index)}>return</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}