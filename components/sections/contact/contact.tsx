import selectors from './contact.module.scss';
import { ContactInfo } from 'components/containers/contact-info/contact-info';
import { SectionHeader } from 'components/containers/section-header/section-header';
import { ContactForm } from 'components/form/contact-form';


export const ContactSection: React.FC = () => {
  return (
    <section className={selectors["contact-section"]} id='contato'>
      <SectionHeader
        title='Contato'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci, neque sit urna, iaculis tincidunt.'
      />
      <ContactInfo />
      <ContactForm/>
    </section>
  )
}