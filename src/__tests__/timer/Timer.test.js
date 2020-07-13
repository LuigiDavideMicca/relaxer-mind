import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
import React from 'react';

import Timer from '../../components/Timer/Timer';

const setup = () => {
   const utils = render(<Timer />);
   let container = null;
   return {
      container,
      ...utils,
   };
};

beforeEach(() => {
   let { container } = setup();
   // setup a DOM element as a render target
   container = document.createElement('div');
   document.body.appendChild(container);
});

afterEach(() => {
   let { container } = setup();
   // cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
});

it('renders correctly with or without props', () => {
   const { container } = setup();
   act(() => {
      render(<Timer />, container);
   });
   expect(container.textContent).toBe('undefined%Tempo Rimanente:minutisecondi');
   act(() => {
      render(<Timer minutes={Math.floor(Math.random() * 10)} />, container);
   });
   expect(container.textContent).not.toBe(undefined);
});
