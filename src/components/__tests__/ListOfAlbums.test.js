import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ListOfAlbums from '../ListOfAlbums'

test('Renders all albums', () => {
  const albums = [{
    name: 'new album',
    image: 'https://image.com',
    id: 111
  }, {
    name: 'new album2',
    image: 'https://image2.com',
    id: 222
  }, {
    name: 'new album3',
    image: 'https://image3.com',
    id: 333
  }]

  const component = render(<ListOfAlbums albums={albums}/>)
  component.getByText('new album')
  component.getByText('new album2')
  component.getByText('new album3')
})


