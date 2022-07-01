import selectors from './icon-card.module.scss';
import Image from 'next/image';
import { Text } from 'components/typography/text/text';
import { Title } from 'components/typography/title/title';


interface IconCardProps {
  icon: { src: string, width: number, height: number }
  title: string;
  text: string[];
}

export const IconCard: React.FC<IconCardProps> = (props) => {  

  return (
    <article className={selectors["service-card"]}>
      <div className={selectors["icon-container"]}>
        <Image {...props.icon} alt=''/>
      </div>
      <div className={selectors["content"]}>
        <Title type='card'>{props.title}</Title>
        <div className={selectors["paragraph-container"]}>
            {props.text.map((line, idx) => <Text type='card' key={idx}>{line}</Text>)}
        </div>   
      </div>     
    </article>
  )
}