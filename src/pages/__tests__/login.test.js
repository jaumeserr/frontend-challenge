import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LoginPage from '../login';

test('Authorize callback is execute', () => {
  const login = jest.fn() //mock function

  const component = render(<LoginPage login={login} />)
  const button = component.getByText('Authorize')
  fireEvent.click(button)
  expect(login).toHaveBeenCalledTimes(1)
})