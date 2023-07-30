import React from 'react';

interface CompleteItemProps {
  description: string;
  pay: number;
}

const completeItem: React.FC<CompleteItemProps> = ({ description, pay }) => {
  return (
    <div>
      <div>{description}</div>
      <div>{pay}</div>
    </div>
  );
};

export default completeItem;
