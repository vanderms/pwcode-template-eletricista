import selectors from './contact.module.scss';
import { ContactInfo } from 'components/containers/contact-info/contact-info';
import { SectionHeader } from 'components/containers/section-header/section-header';
import { ContactForm } from 'components/form/contact-form';
import { LocationMap } from 'components/containers/map/map';
import Script from 'next/script';
import { useState } from 'react';


export const ContactSection: React.FC = () => {
  const [isLeafletLoaded, setIsLeafletLoaded] = useState<boolean>(false);

  return (
    <section className={selectors["contact-section"]} id='contato'>
      <SectionHeader
        title='Contato'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci, neque sit urna, iaculis tincidunt.'
      />
      <ContactInfo />
      <ContactForm />
         <Script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
        strategy='lazyOnload'
        onLoad={() => setIsLeafletLoaded(true)}
      ></Script>
      {isLeafletLoaded && <LocationMap/>}      
    </section>
  )
}