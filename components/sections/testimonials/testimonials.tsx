import { TestimonialsCard } from 'components/cards/testimonials/testimonials-card';
import { SectionHeader } from 'components/containers/section-header/section-header';
import selectors from './testimonials.module.scss';
import { ChangeEvent, useState } from 'react';


export const TestimonialsSection: React.FC = () => {

  const [navegation, setNavegation] = useState<{ shown: number }>({ shown: 1 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setNavegation({ shown: +e.currentTarget.value });
    }
  }

  return (
    <section className={selectors["testimonials-section"]} id='depoimentos'>
      <SectionHeader 
        title='Clientes Satisfeitos'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci, neque sit urna, iaculis tincidunt.'
      />
      <div className={selectors["navegation-frame"]}>
        <ul className={selectors["card-list"]} data-shift={`${navegation.shown}`}>
          <li>
            <TestimonialsCard
              name='Pedro Santos'
              avatar='/assets/avatars/pedro.png'
              text={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus purus commodo id est praesent amet enim feugiat justo. Risus.']}          
            />
          </li>
          <li>
            <TestimonialsCard
              name='Joana Silva'
              avatar='/assets/avatars/joana.png'
              text={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus purus commodo id est praesent amet enim feugiat justo. Risus.']}          
            />
          </li>
          <li>
            <TestimonialsCard
              name='Mario Afonso'
              avatar='/assets/avatars/mario.png'
              text={['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus purus commodo id est praesent amet enim feugiat justo. Risus.']}          
            />
          </li>
        </ul>
      </div>
      <div className={selectors["navegation"]}>
        <label data-checked={ navegation.shown === 1 || undefined }>
          <input
            type="radio"
            name="testimonials-navegation"
            aria-label='exibir primeiro depoimento'
            value='1'
            onChange={handleChange}
            checked={navegation.shown === 1 }
          />
        </label>
        <label data-checked={ navegation.shown === 2 || undefined }>
          <input
            type="radio"
            name="testimonials-navegation"
            aria-label='exibir segundo depoimento'
            value='2'
            onChange={handleChange}
            checked={navegation.shown === 2 }
          />
        </label>
        <label data-checked={ navegation.shown === 3 || undefined }>
          <input
            type="radio"
            name="testimonials-navegation"
            aria-label='exibir terceiro depoimento'
            value='3'
            onChange={handleChange}
            checked={navegation.shown === 3 }
          />
        </label>        
      </div>
    </section>
  )
}