import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  }

} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Primary = Template.bind({});
