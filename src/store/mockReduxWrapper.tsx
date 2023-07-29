import { Provider } from 'react-redux';

import { RootState } from './index';

import thunk from 'redux-thunk';

import logger from 'redux-logger';

import configureMockStore from 'redux-mock-store';

export default function mockReduxWrapper(
  initialState?: Pick<RootState, 'todo' | 'modal'>
) {
  const mockStore = configureMockStore([thunk, logger]);

  const store = mockStore(initialState);

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { Wrapper, store };
}
