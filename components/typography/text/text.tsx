import React from 'react';
import selectors from './text.module.scss';

interface TextProps {
  type: 'headline' | 'body' | 'card';
  variant?: string;
  children: React.ReactNode;
  className: string;
}

export const Text: React.FC<TextProps> = (props) => {

  const tag = props.variant ?? 'p';

  const className = `${selectors[props.type]} ${props.className ?? ''}`;

  return React.createElement(tag, { className }, props.children);  
}