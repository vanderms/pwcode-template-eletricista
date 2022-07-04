import selectors from './contact-card.module.scss';
import { WhatsappIcon, LocationIcon, EmailIcon } from 'components/icons/icons';

interface ContactCardProps {
  type: 'primary' | 'secondary';
  icon: 'address' | 'whatsapp' | 'email';
  className?: string;
  children: React.ReactNode;
}

//the internacionalization should be improved, especially, in a english project
const i18nTable = {
  portuguese: {
    address: 'endereço',
    whatsapp: 'whatsapp',
    email: 'email'
  }
}

export const ContactCard: React.FC<ContactCardProps> = (props) => {
  const Icon = {
    address: LocationIcon,
    whatsapp: WhatsappIcon,
    email: EmailIcon
  }[props.icon];

  return (
    <div className={`${selectors['contact-card']}  ${selectors[props.type]}`} aria-label={`informação de contato: ${i18nTable.portuguese[props.icon]}`}>
      <Icon color='black'/>
      <p className={selectors['info']}>{ props.children }</p>
    </div>
  )
}