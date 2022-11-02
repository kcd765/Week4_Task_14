import React from 'react';
import { CardDisplay } from './CardDisplay';

export default {
    title: 'Component/CardDisplay',
    component: CardDisplay
};

const Template = args => <CardDisplay {...args} />;

export const CardDisplay1 = Template.bind({});
CardDisplay1.args = {
    backgroundColor: "blue",
    color: "white",
    height: "150px",
    fontFamily: "arial"
}
