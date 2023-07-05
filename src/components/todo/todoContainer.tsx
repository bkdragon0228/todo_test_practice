import React from 'react';

const TodoContainer = () => {

    const onClick = () => {
      console.error('에러가 발생했습니다.')
    }
    return (
      <div>
            <h2>할 일</h2>
            <button onClick={onClick}>등록</button>
      </div>
    );
};

export default TodoContainer;