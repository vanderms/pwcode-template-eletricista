import selectors from './services.module.scss';
import { SectionHeader } from "components/section-header/section-header";
import { IconCard } from 'components/cards/icon/icon-card.';


export const ServicesSection: React.FC = () => {
  return (
    <section className={selectors["services-section"]} id='servicos'>
      <SectionHeader
        title='Serviços'
        subtitle='Serviços prestados com qualidade, pontualidade e um preço imbátivel'
      />
      <ul className={selectors["service-list"]}>
        <li>
          <IconCard
          icon={{src:'/assets/icons/branches.svg', width: 60, height: 60}}
          title='Instalações em geral'
          text={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sapien ac urna, nunc accumsan adipiscing blandit faucibus. Ultricies.']}        
        />
        </li>
        <li>
          <IconCard
          icon={{src:'/assets/icons/emergency.svg', width: 60, height: 60}}
          title='Serviços emergenciais'
          text={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sapien ac urna, nunc accumsan adipiscing blandit faucibus. Ultricies.']}        
        />
        </li>
        <li>
          <IconCard
          icon={{src:'/assets/icons/building.svg', width: 60, height: 60}}
          title='Manutenção predial'
          text={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sapien ac urna, nunc accumsan adipiscing blandit faucibus. Ultricies.']}        
        />
        </li>
      </ul>
    </section>
  );
}