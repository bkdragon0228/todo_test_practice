import {
  CompleteProps,
  addComplete,
  deleteComplete,
} from '../../src/store/_reducer/complete';

import CompleteReducer from '../../src/store/_reducer/complete';

describe('completeReducer', () => {
  const initialState: CompleteProps[] = [
    {
      id: '1',
      description: 'sample',
      pay: 30000,
    },
  ];

  context('addComplete', () => {
    it('완료 목록이 늘어난다.', () => {
      const newState = CompleteReducer(
        initialState,
        addComplete({ description: 'sample2', id: '2', pay: 10000 })
      );

      expect(newState).toHaveLength(2);
      expect(newState[1].description).toBe('sample2');
    });
  });

  context('deleteComplete', () => {
    it('완료 목록이 줄어든다.', () => {
      const newState = CompleteReducer(initialState, deleteComplete('1'));

      expect(newState).toHaveLength(0);
    });
  });
});
