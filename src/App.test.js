import { render, screen } from '@testing-library/react';
import App from './App';

test('renders inbox screen', () => {
  render(<App />);
  const InboxScreen = screen.getAllByTestId('inbox')[0];
  expect(InboxScreen).toBeInTheDocument();
});
