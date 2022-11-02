import React from 'react';
import { Footer } from './Footer';

export default {
    title: 'Component/Footer',
    component: Footer
};

const Template = args => <Footer {...args} />;

export const Footer1 = Template.bind({});
Footer1.args = {
    color1: "black",
    color2: "green"
}

export const Footer2 = Template.bind({});
Footer1.args = {
    color1: "blue",
    color2: "red",
    height: "15%"
}