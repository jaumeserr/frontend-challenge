import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import HomePage from '../home';

test('if player component is rendered', () => {
  const history = createMemoryHistory()
  render(<Router history={history}><HomePage /></Router>)
  expect(screen.getByText(/Discover/i)).toBeInTheDocument();
})