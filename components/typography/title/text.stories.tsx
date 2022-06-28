import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from './title';

export default {  
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>;


const Template: ComponentStory<typeof Title> = (args) => <Title {...args}>I Am a Title</Title>;

export const Headline = Template.bind({});

Headline.args = {
  type: 'headline',
};

export const SectionTitle = Template.bind({});

SectionTitle.args = {
  type: 'section',
};

export const CardTitle = Template.bind({});

CardTitle.args = {
  type: 'card',
};