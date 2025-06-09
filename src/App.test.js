import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero text', () => {
  render(<App />);
  const heading = screen.getByText(/John Doe/i);
  expect(heading).toBeInTheDocument();
});
