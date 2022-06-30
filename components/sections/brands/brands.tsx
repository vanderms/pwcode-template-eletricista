import selectors from './brands.module.scss';
import Image from 'next/image';
import SenaiImage from 'public/assets/brands/senai.png';
import InduscabosImage from 'public/assets/brands/induscabos.png';
import SiemensImage from 'public/assets/brands/siemens.png';


export const BrandsSection: React.FC = () => {
  return (
    <aside className={selectors["brands-section"]}>
      <div className={selectors["section-container"]}>
        <div><Image src={SenaiImage} alt='senai' /></div>
        <div><Image src={SiemensImage} alt='siemens'/></div>
        <div><Image src={InduscabosImage} alt='induscabos'/></div>        
      </div>  
    </aside>
  )
}