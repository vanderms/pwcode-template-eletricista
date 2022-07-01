import { SectionHeader } from 'components/section-header/section-header';
import selectors from './latest-works.module.scss';
import { ThumbnailCard } from 'components/cards/thumbnail/thumbnail-card';


export const LatestWorksSection: React.FC = () => {
  return (
    <section className={selectors["latest-works-section"]}>
      <SectionHeader
        title='Trabalhos Recentes'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci, neque sit urna, iaculis tincidunt.'
      />
      <ul className={selectors["latest-works-list"]}>
        <li>
          <ThumbnailCard
            thumbnail='/assets/works/luminarias.jpg'
            title='Instalação de Luminárias'
            text={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis blandit id eu sit metus nunc morbi amet in. Dapibus massa nulla ut habitant.']}
          />
        </li>
        <li>
          <ThumbnailCard
            thumbnail='/assets/works/disjuntores.jpg'
            title='Troca quadro de disjuntores'
            text={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis blandit id eu sit metus nunc morbi amet in. Dapibus massa nulla ut habitant.']}
          />
        </li>
        <li>
          <ThumbnailCard
            thumbnail='/assets/works/paineis-solares.jpg'
            title='Instalação painéis solares'
            text={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis blandit id eu sit metus nunc morbi amet in. Dapibus massa nulla ut habitant.']}
          />
        </li>
      </ul>
    </section>
  )
}