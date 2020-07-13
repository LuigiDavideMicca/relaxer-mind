import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import TimerForm from '../../components/Timer/TimerForm';

const setup = () => {
   const utils = render(<TimerForm />);
   const button = utils.getByLabelText('button-form');
   const form = utils.queryByLabelText('main-form');
   const inputM = utils.queryByLabelText('minutes-input');
   const inputS = utils.queryByLabelText('seconds-input');
   const buttonS = utils.queryByLabelText('button-submit');
   return {
      button,
      form,
      inputM,
      inputS,
      buttonS,
      ...utils,
   };
};

test('start with no form', () => {
   const { form } = setup();
   expect(form).toBe(null);
});

test('click event displays the form', () => {
   const { button, form } = setup();
   fireEvent.click(button);
   expect(form).not.toBe('');
});
