import selectors from './navbar.module.scss';
import Link from 'next/link';


interface ListItemLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ListItemLink: React.FC<ListItemLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={ href }>
        <a className={selectors['navlink']}>{children}</a>
      </Link>
    </li>
  );
}