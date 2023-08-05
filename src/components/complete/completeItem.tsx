import React, { memo } from 'react';

interface CompleteItemProps {
  description: string;
  pay: number;
  id: string;
  handleDelete: (id: string) => void;
}

const completeItem: React.FC<CompleteItemProps> = ({
  description,
  pay,
  handleDelete,
  id,
}) => {
  console.log(`${description} complelte 렌더링`);
  return (
    <div>
      <div>{description}</div>
      <div>{pay}</div>
      <button onClick={() => handleDelete(id)}>삭제</button>
    </div>
  );
};

export default memo(completeItem);
