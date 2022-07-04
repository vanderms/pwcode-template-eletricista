import selectors from './contact-info.module.scss';
import { ContactCard } from 'components/cards/contact/contact-card';

export const ContactInfo: React.FC = () => {
  return (
    <address className={selectors['contact-info']}>
      <ContactCard type='secondary' icon='address'>
        Rua Ariosto Borges, 32, São Paulo/SP
      </ContactCard>
      <a href="https://api.whatsapp.com/send?phone=5511999999999" target="_blank" rel="noopener noreferrer">
        <ContactCard type='primary' icon='whatsapp'>
          (11) 9999-9999
        </ContactCard>
      </a>
      <ContactCard type='secondary' icon='email'>
        andre-soares@mail.com.br
      </ContactCard>
      </address>
  )
}