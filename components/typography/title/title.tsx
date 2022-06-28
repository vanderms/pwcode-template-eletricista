import React from 'react';
import selectors from './title.module.scss';

export interface TitleProps {
  type: 'headline' | 'section' | 'card';
  variant?: 'h1' | 'h2' | 'h3'; 
  children?: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  const tag = props.variant ?? {
    headline: 'h1',
    section: 'h2',
    card: 'h3'
  }[props.type];

  const className = `${selectors[props.type]} ${props.className ?? ''}`;

  return React.createElement(tag, { className }, props.children);
}
