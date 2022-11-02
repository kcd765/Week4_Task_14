import React from 'react';
import { Form } from './Form';

export default {
    title: 'Component/Form',
    component: Form
};

const Template = args => <Form {...args} />;

export const Form1 = Template.bind({});
Form1.args = {
    color: "blue"
};