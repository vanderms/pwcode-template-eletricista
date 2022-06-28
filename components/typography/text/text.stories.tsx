import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './text';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam aut dolor sint eos cupiditate ducimus! Accusantium aperiam a, quod, dolorem esse quia molestias ea, at aliquam nesciunt iusto hic dolorum.
  </Text>
);

export const HeadlineText = Template.bind({});

HeadlineText.args = {
  type: 'headline',
};

export const BodyText = Template.bind({});

BodyText.args = {
  type: 'body',
};

export const CardText = Template.bind({});

CardText.args = {
  type: 'card',
};