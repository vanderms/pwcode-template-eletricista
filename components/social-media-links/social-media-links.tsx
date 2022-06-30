import selectors from './social-media-links.module.scss';
import { LinkedinIcon, FacebookIcon, TwitterIcon } from '../icons/icons';

interface SocialMediaLinksProps{
  color: string;
  className?: string;
}

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ color, className }) => {
  return (
    <ul className={`${selectors['social-media-links']} ${className}`}>
      <li>
        <a href="https://www.linkedin.com" aria-label='linkedin' target="_blank" rel="noopener noreferrer">
          <LinkedinIcon color={color} />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" aria-label='twitter' target="_blank" rel="noopener noreferrer">
          <TwitterIcon color={color} />
        </a>
      </li>
      <li>      
        <a href="https://www.facebook.com" aria-label='facebook' target="_blank" rel="noopener noreferrer">
          <FacebookIcon color={color }/>
        </a>
      </li>
    </ul>
  )
}