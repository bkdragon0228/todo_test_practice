import React from 'react';

interface CompleteItemProps {
  description: string;
  pay: number;
  handleDelete: () => void;
}

const completeItem: React.FC<CompleteItemProps> = ({
  description,
  pay,
  handleDelete,
}) => {
  return (
    <div>
      <div>{description}</div>
      <div>{pay}</div>
    </div>
  );
};

export default completeItem;
