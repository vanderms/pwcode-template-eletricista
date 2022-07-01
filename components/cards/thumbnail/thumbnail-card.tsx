import selectors from './thumbnail-card.module.scss';
import { Title } from 'components/typography/title/title';
import { Text } from 'components/typography/text/text';
import Image from 'next/image';

interface ThumbnailCardProps {
  thumbnail: string;
  title: string;
  text: string[];
}

export const ThumbnailCard: React.FC<ThumbnailCardProps> = (props) => {
  return (
    <article className={selectors["thumbnail-card"]} data-component='thumbnail-card'>
      <div className={selectors["image-container"]}>
        <Image src={ props.thumbnail } layout='fill' objectPosition='center' objectFit='cover' alt=''/>
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