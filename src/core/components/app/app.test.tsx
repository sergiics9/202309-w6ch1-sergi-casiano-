import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import App from './app';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Call/i)).toBeInTheDocument();
});
