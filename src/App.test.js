import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders code viewer', () => {
  const { getByText } = render(<App />);
  const codeViewerTitle = getByText(/Some good looking code/i);
  expect(codeViewerTitle).toBeInTheDocument();
});
