import selectors from './footer.module.scss';
import Image from 'next/image';
import Logo from 'public/assets/logo-footer.svg';
import { SocialMediaLinks } from 'components/containers/social-media-links/social-media-links';


export const Footer: React.FC = () => {
  return (
    <footer className={selectors["footer"]}>
      <div className={selectors["container"]}>
        <Image src={Logo} alt='' />
        <SocialMediaLinks color='white'/>
      </div>
      <div className={selectors["copyright"]}>2022 - Todos os direitos reservados</div>
    </footer>
  )
}