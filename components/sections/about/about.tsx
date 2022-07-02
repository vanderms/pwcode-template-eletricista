import selectors from './about.module.scss';
import { Title } from 'components/typography/title/title';
import { Text } from 'components/typography/text/text';
import Image from 'next/image';
import IllustrationImage from 'public/assets/about/light.jpg';
import MeImage from 'public/assets/about/andre.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section className={selectors["about-section"]} id='sobre'>
      <Title className={selectors['title']} type='section'>Sobre Mim</Title>
      <div className={selectors["content"]}>
        <div className={selectors["images-container"]}>
          <div className={selectors['illustration']}>
             <Image src={IllustrationImage} alt=''/>
          </div>
          <div className={selectors['me']}>
             <Image src={MeImage} alt='Andre Soares'/>
          </div>
        </div>
        <div className={selectors["text-container"]}>
          <Text type='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices quisque crassitum. Pretium facilisi turpis nunc ut dui.</Text>
          <Text type='body'>Ri augue enim magna lacinia vel et gravida volutpat.</Text>
          <Text type='body'>Semper id arcu, in urna integer ultricies pellentesque. Cras non volutpat neque enim enim vel non, id. Tortor in ornare ultrices semper enim iaculis ridiculus egestas.</Text>
          <Text type='body'>Auctor mauris lacus aliquet lobortis.</Text>
        </div>
      </div>
    </section>
  )
}