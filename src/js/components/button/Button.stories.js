import React from 'react';

import Button from './Button';

export default {
   title: 'Button',
   component: Button
};

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const secondary = () => <Button variant='secondary'>secondary</Button>;
export const danger = () => <Button variant='danger'>danger</Button>;