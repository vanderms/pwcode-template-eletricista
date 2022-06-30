import selectors from './action-link.module.scss';
import Link from 'next/link';

interface ActionLinkProps {
  type: 'primary' | 'secondary' | 'ternary'; 
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ActionLink: React.FC<ActionLinkProps> = (props) => {
  
  const className = `${selectors[props.type]} ${props.className ?? ''}`;
  
  if (props.href.includes('http')) {
    return (
      <a href={ props.href } className={className} target="_blank" rel="noopener noreferrer">{props.children}</a>
    );
  }

  return (
    <Link href={props.href}>
      <a className={className}>{props.children}</a>
    </Link>
  );
}