import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from '../Card';

test('renders name and image on Card', () => {
  const card = {
    name: 'new name',
    image: 'https://image.com'
  }

  const component = render(<Card album={card}/>)
  expect(component.container).toHaveTextContent(card.name)
  expect(card.name).toBe(card.name)
})

test('renders empty name and image on Card', () => {
  const card = {
    name: '',
    image: 'https://image.com'
  }

  const component = render(<Card album={card}/>)
  expect(component.container).toHaveTextContent(card.name)
  expect(card.name).toBeFalsy()
})

