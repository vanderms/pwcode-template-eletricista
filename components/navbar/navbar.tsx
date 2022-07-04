import React from 'react';
import selectors from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ListItemLink } from './utilities';
import { SocialMediaLinks } from 'components/containers/social-media-links/social-media-links';
import { HamburgerIcon, CloseIcon } from 'components/icons/icons';
import { useState, useEffect } from 'react';


export const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState<{ position: 'static'|'fixed' }>({ position: 'static' });
  const [sidebar, setSidebar] = useState<{status: 'open'|'closed'}>({ status: 'closed' });

  const closeSidebar = () => setSidebar({ status: 'closed' });
  const openSidebar = () => setSidebar({ status: 'open' });

  useEffect(() => {
    function scrollHandler() {  
      if (window.scrollY > 100) setNavbar({ position: 'fixed' });
      if(window.scrollY === 0) setNavbar({ position: 'static' });
    }
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
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
          onClick={closeSidebar}>
          <CloseIcon color='black'/>
        </button>
        <ul className={selectors["navlink-list"]}>
          <ListItemLink href='/' onClick={closeSidebar}>Início</ListItemLink>
          <ListItemLink href='/#sobre' onClick={closeSidebar}>Sobre</ListItemLink>
          <ListItemLink href='/#servicos' onClick={closeSidebar}>Serviços</ListItemLink>
          <ListItemLink href='/#depoimentos' onClick={closeSidebar}>Depoimentos</ListItemLink>
          <ListItemLink href='/#contato' onClick={closeSidebar}>Contato</ListItemLink>
        </ul>
        <SocialMediaLinks color='black' className={selectors['social-media-links'] } />
      </div>
      <button
        className={selectors['menu-btn']}
        aria-label='abrir menu lateral'
        onClick={openSidebar}>
        <HamburgerIcon color='black'/>
      </button>
      <div
        className={selectors["backdrop"]}
        onClick={closeSidebar}        
      ></div>
      </nav>
      { navbar.position === 'fixed' && <div className={selectors["placeholder"]}></div>}      
      </>
  )
}