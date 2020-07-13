import { fireEvent, render, cleanup } from '@testing-library/react';
import React from 'react';

import Quotations from '../../pages/Quotations';

afterEach(cleanup);

const setup = () => {
   const utils = render(<Quotations />);
   const button = utils.getByLabelText('quote-generator');
   const container_p = utils.getByLabelText('container-p');

   return {
      button,
      container_p,
      ...utils,
   };
};

test('start with no quotes', () => {
   const { container_p } = setup();
   expect(container_p.textContent).toBe('');
});

test('click event creates the card', () => {
   const { button, container_p } = setup();
   fireEvent.click(button);
   expect(container_p).not.toBe('');
});
