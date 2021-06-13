import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App'

test('App Component is rendered', () => {
  render(<App />)
  expect(screen.getByText(/Authorize/i)).toBeInTheDocument();
})