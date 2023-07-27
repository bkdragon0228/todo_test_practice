import React, { useState } from 'react';

interface ITodoForm {
  handleSubmit: (value: string) => void;
}

const TodoForm: React.FC<ITodoForm> = ({ handleSubmit }) => {
  const [content, setContent] = useState<string>('');

  const onClick = () => {
    handleSubmit(content);
    setContent('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일"
        data-testid="todo-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={onClick} disabled={!content}>
        등록
      </button>
    </div>
  );
};

export default TodoForm;
