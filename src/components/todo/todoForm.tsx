import React, { useState } from 'react';

interface ITodoForm {
    handleSubmit : (value : string) => void;
    showError : () => void;
}

const TodoForm : React.FC<ITodoForm> = ({
    handleSubmit,
    showError
}) => {
    const [content, setContent] = useState<string>('')

    return (
        <div>
            <input
                type='text'
                placeholder='contents'
                data-testid='todo-input'
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                onClick={content.length > 0 ? () => handleSubmit(content) : showError}
            >
                등록
            </button>
        </div>
    );
};

export default TodoForm;