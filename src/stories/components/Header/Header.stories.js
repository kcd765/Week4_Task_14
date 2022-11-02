import React from 'react';
import { Header } from './Header';

export default {
    title: 'Component/Header',
    component: Header,
};

const Template = args => <Header {...args} />;

export const Header1 = Template.bind({});
Header1.args = {
    backgroundColor: "#b13c3c"
}

export const Header2 = Template.bind({});
Header2.args = {
    backgroundColor: "green",
    color: "white"
}