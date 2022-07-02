import selectors from './testimonials-card.module.scss';
import Image from 'next/image';
import { Text } from 'components/typography/text/text';


interface TestimonialsCardProps {
  avatar: string;
  name: string;
  text: string[];
}

export const TestimonialsCard: React.FC<TestimonialsCardProps> = (props) => {
  return (
    <figure className={selectors['testimonial-card']}>
      <div className={selectors["avatar-container"]}>
        <Image layout='fill' src={props.avatar} alt=''/>
      </div>
      <blockquote className={selectors['quotation-container'] }>
        { props.text.map((line, idx) => <Text key={idx} type='card'>{ line }</Text> ) }
    </blockquote>
      <figcaption className={selectors['name']}>{ props.name }</figcaption>
  </figure>
  )
}