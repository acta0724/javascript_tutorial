export const InputTodo = (props) => {
    const { todoText, onChangeTodoText, onClickAddTodo } = props;
    return (
        <div className="input-area">
            <input id="add-text" type="text" placeholder="please add todo" value={todoText} onChange={onChangeTodoText}/>
            <button id="add-button" onClick={onClickAddTodo}>add</button>
        </div>
    )
}