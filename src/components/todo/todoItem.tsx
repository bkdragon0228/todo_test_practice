import React from 'react';

interface ITodoitem {
    title : string
}

const TodoItem : React.FC<ITodoitem> = ({
    title
}) => {
    return (
        <div style={{
            display : 'flex'
        }}>
            <input type='checkbox' />
            <div>
                {title}

            </div>
        </div>
    );
};

export default TodoItem;