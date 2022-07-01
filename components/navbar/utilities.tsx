import selectors from './navbar.module.scss';
import Link from 'next/link';


interface ListItemLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const ListItemLink: React.FC<ListItemLinkProps> = ({ href, children, onClick }) => {
  return (
    <li>
      <Link href={ href }>
        <a onClick={ onClick } className={selectors['navlink']}>{children}</a>
      </Link>
    </li>
  );
}