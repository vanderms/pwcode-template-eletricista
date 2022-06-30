import React from 'react';
import selectors from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ListItemLink } from './utilities';
import { SocialMediaLinks } from 'components/social-media-links/social-media-links';
import { HamburgerIcon, CloseIcon } from 'components/icons/icons';
import { useState, useEffect } from 'react';


export const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState<{ position: 'static'|'fixed' }>({ position: 'static' });
  const [sidebar, setSidebar] = useState<{status: 'open'|'closed'}>({ status: 'closed' });

  return (
    <nav className={selectors.navbar} data-position={ navbar.position }>
      <Link href='/'>
        <a aria-label='homepage' className={selectors['logo-link'] }>
          <Image src='/assets/logo.svg' alt='' width={203} height={53}/>
        </a>
      </Link>
      <div className={selectors['sidebar-container']} data-status={sidebar.status}>
        <button
          className={selectors['close-btn']}
          aria-label='fechar menu lateral'
          onClick={() => setSidebar({status: 'closed'})}>
          <CloseIcon color='black'/>
        </button>
        <ul className={selectors["navlink-list"]}>
          <ListItemLink href='/'>Início</ListItemLink>
          <ListItemLink href='/#sobre'>Sobre</ListItemLink>
          <ListItemLink href='/#servicos'>Serviços</ListItemLink>
          <ListItemLink href='/#depoimentos'>Depoimentos</ListItemLink>
          <ListItemLink href='/#contato'>Contato</ListItemLink>
        </ul>
        <SocialMediaLinks color='black' className={selectors['social-media-links'] } />
      </div>
      <button
        className={selectors['menu-btn']}
        aria-label='abrir menu lateral'
        onClick={() => setSidebar({ status: 'open' })}>
        <HamburgerIcon color='black'/>
      </button>
      <div
        className={selectors["backdrop"]}
        onClick={() => setSidebar({ status: 'closed' })}        
      ></div>
    </nav>
  )
}