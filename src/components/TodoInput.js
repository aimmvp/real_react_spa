import React, {useState} from "react";
import styles from "../Todo.module.css";

const TodoInput=( { onInsert} ) =>{
    // return <h1>TodoInput</h1>;
    const [value, setValue] = useState("");
    // 변경 이벤트 처리
    const onChange = (e) => {
        setValue(e.target.value);
    };
    //submit 이벤트 처리
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(value);
        setValue("");
    };

    return (
        <div className={styles.input}>
            <form onSubmit={onSubmit}>
                <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
                <button type="submit">추가</button>
            </form>
        </div>
    )
};

export default TodoInput;