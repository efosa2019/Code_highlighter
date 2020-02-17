import React from 'react';
import { render } from '@testing-library/react';
import STRINGS_REGEX from './code-viewer/Parse';
import COMPARATORS_REGEX from './code-viewer/Parse';
import KEYWORDS_REGEX from './code-viewer/Parse';
import App from './App';

test('renders code viewer', () => {
  const { getByText } = render(<App />);
  const codeViewerTitle = getByText(/Some good looking code/i);
  expect(codeViewerTitle).toBeInTheDocument();
});

test('should output color of strings', () => {
  expect(STRINGS_REGEX('#f5d67b')).toBe('#f5d67b');
});

test('should output color of comparators', () => {
  expect(COMPARATORS_REGEX('#005cc5')).toBe('#005cc5');
});

test('should output color of keywords', () => {
  expect(KEYWORDS_REGEX('#d73a49')).toBe('#d73a49');
});

test('should output color of block comments ', () => {
  expect(KEYWORDS_REGEX('#7bf59585')).toBe('#7bf59585');
});

test('render comments font style', () => {
  expect(KEYWORDS_REGEX('italic')).toBe('italic');
});
