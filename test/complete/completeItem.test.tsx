import React from 'react';

import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import CompleteItem from '../../src/components/complete/completeItem';

describe('CompleteItem', () => {
  const handleDelete = jest.fn();

  const renderCompleteItem = () => {
    const { container } = render(
      <CompleteItem
        description="sample"
        pay={1000}
        handleDelete={handleDelete}
      />
    );

    const description = screen.getByText('sample');
    const pay = screen.getByText(1000);
    const deleteBtn = screen.getByText('삭제');

    return {
      container,
      description,
      pay,
      deleteBtn,
    };
  };

  context('컴포넌트가 마운트 되면', () => {
    it('완료한 일, 값어치, 삭제 버튼이 보여야 한다.', () => {
      const { deleteBtn, description, pay } = renderCompleteItem();

      expect(deleteBtn).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(pay).toBeInTheDocument();
    });
  });

  context('삭제 버튼을 누르면', () => {
    it('handleDelete가 호출된다.', () => {
      const { deleteBtn } = renderCompleteItem();

      userEvent.click(deleteBtn);

      expect(handleDelete).toHaveBeenCalledWith();
    });
  });
});
