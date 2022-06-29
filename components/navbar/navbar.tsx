import React from 'react';
import selectors from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ListItemLink } from './utilities';
import { SocialMediaLinks } from 'components/social-media-links/social-media-links';
import { HamburgerIcon, CloseIcon } from 'components/icons/icons';


export const Navbar: React.FC = () => {
  return (
    <nav className={selectors.navbar}>
      <Link href='/'>
        <a aria-label='homepage' className={selectors['logo-link'] }>
          <Image src='/assets/logo.svg' alt='' width={203} height={53}/>
        </a>
      </Link>
      <div className={selectors['sidebar-container']}>
        <button className="close-btn" aria-label='fechar menu lateral'>
          <CloseIcon color='black'/>
        </button>
        <ul className={selectors["navlink-list"]}>
          <ListItemLink href='/'>Início</ListItemLink>
          <ListItemLink href='/#sobre'>Sobre</ListItemLink>
          <ListItemLink href='/#servicos'>Serviços</ListItemLink>
          <ListItemLink href='/#depoimentos'>Depoimentos</ListItemLink>
          <ListItemLink href='/#contato'>Contato</ListItemLink>
        </ul>
        <SocialMediaLinks color='black'/>
      </div>
      <button className={selectors['menu-btn']} aria-label='abrir menu lateral'>
        <HamburgerIcon color='black'/>
      </button>
      <div className={selectors["backdrop"]}></div>
    </nav>
  )
}