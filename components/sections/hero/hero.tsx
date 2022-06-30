import selectors from './hero.module.scss';
import { Title } from 'components/typography/title/title';
import { Text } from 'components/typography/text/text';
import { ActionLink } from 'components/buttons/action-link/action-link';
import Image from 'next/image';
import { WhatsappIcon } from 'components/icons/icons';

export const HeroSection: React.FC = () => {
  return (
    <header className={selectors["hero-section"]}>
      <div className={selectors["image-mobile-container"]}>
        <Image src='/assets/hero-mobile.jpg' alt='' width={642} height={382}></Image>
      </div>
      <div className={selectors["image-desktop-container"]}>
        <Image src='/assets/hero-desktop.jpg' alt='' width={465} height={509} className={selectors['image-desktop']}></Image>
      </div>
      <div className={selectors["content"]}>
        <Title className={selectors['title']} type='headline'>O melhor eletricista da sua região</Title>
        <Text className={selectors['text'] } type='headline'>Olá, meu nome é André Soares. Nos meus quinze anos de experiência  com elétrica residencial e comercial,  eu acumulei centenas de clientes satisfeitos. Seja o próximo.</Text>        
        <div className={selectors["action-links-container"]}>
          <ActionLink href='/#servicos' type='primary'>Confira os serviços prestados</ActionLink>
          <ActionLink className={selectors['ternary-button']} href='https://api.whatsapp.com/send?phone=5511999999999' type='ternary'> <WhatsappIcon color='black'/>(11) 99999-9999</ActionLink>
        </div>      
      </div>
    </header>
  )
}