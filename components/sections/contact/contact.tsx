import selectors from './contact.module.scss';
import { ContactInfo } from 'components/containers/contact-info/contact-info';
import { SectionHeader } from 'components/containers/section-header/section-header';


export const ContactSection: React.FC = () => {
  return (
    <section className={selectors["contact-section"]}>
      <SectionHeader
        title='Contato'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci, neque sit urna, iaculis tincidunt.'
      />
      <ContactInfo/>


    </section>
  )
}