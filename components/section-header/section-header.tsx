import selectors from './section-header.module.scss';
import { Title } from '../typography/title/title';
import { Text } from '../typography/text/text';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  return (
    <header className={`${selectors["section-header"]} ${props.className ?? ''}`}>
      <Title className={selectors['title']} type='section'>{ props.title }</Title>
      <Text className={selectors['subtitle']} type='body'>{ props.subtitle }</Text>
    </header>
  )
} 